import { computed } from "vue";
import { useRoute, type LocationQueryValue } from "vue-router";

export const allCategories = [
  "hardware-synths",
  "hybrid-synths",
  "audio",
  "software-instruments",
  "software-instruments-effects",
  "software-effects",
  "drums",
  "ipad-synths",
] as const;

export type Category = (typeof allCategories)[number];

// "hardware-synths" -> ["hardware-synths"]
// "software-instruments,software-instruments-effects" -> ["software-instruments", "software-instruments-effects"]
// "any" -> [ "hardware-synths", "hybrid-synths", "audio", "software-instruments", "software-instruments-effects", "software-effects", "drums", "ipad-synths" ]
// ""    -> [ "hardware-synths", "hybrid-synths", "audio", "software-instruments", "software-instruments-effects", "software-effects", "drums", "ipad-synths" ]

export function parseCategoryQueryParam(
  queryParamValue: LocationQueryValue | LocationQueryValue[]
): readonly Category[] {

  if (
    typeof queryParamValue !== "string" ||
    queryParamValue === "any" ||
    queryParamValue === "" ||
    queryParamValue === undefined
  ) {
    return allCategories;
  }

  const categories = new Set<Category>();

  for (const maybeCategory of queryParamValue.split(",").map((s) => s.trim())) {
    if (!allCategories.includes(maybeCategory as Category)) {
      continue;
    }

    const category = maybeCategory as Category;

    categories.add(category);
  }

  return Array.from(categories);
}

export function serializeCategoryQueryParam(categories: readonly Category[]): string {

  if( categories.length === allCategories.length ){
    return "any";
  }

  return categories.join(",");

}

export const allCategoryGroups = ["hardware-synthesizers", "controllers", "audio", "software-instruments", "software-effects", "other", "any"] as const;

export type CategoryGroup = typeof allCategoryGroups[number];

export function getCategoriesFromCategoryGroup(categoryGroup: CategoryGroup): readonly Category[] {

    switch (categoryGroup) {
        case "hardware-synthesizers": return ["hardware-synths"];
        case "controllers": return ["hybrid-synths"];
        case "audio": return ["audio"];
        case "software-instruments": return ["software-instruments", "software-instruments-effects"];
        case "software-effects": return ["software-effects", "software-instruments-effects"];
        case "other": {

            const otherCategories = new Set(allCategories);

            allCategoryGroups
                .filter(categoryGroup => categoryGroup !== "other" && categoryGroup !== "any")
                .forEach(categoryGroup => getCategoriesFromCategoryGroup(categoryGroup).forEach(category => otherCategories.delete(category)));

            return Array.from(otherCategories);

        };
        case "any": return allCategories;
    }

}

export function getCategoryGroupFromCategories(categories: readonly Category[]): CategoryGroup | undefined {

    const categoryGroup = allCategoryGroups.find(categoryGroup => {

        const categories_group = getCategoriesFromCategoryGroup(categoryGroup);

        const serialize = (categories: readonly Category[]) => [...categories].sort().join(",");

        return serialize(categories) === serialize(categories_group);

    });

    if (categoryGroup === undefined) {
        return undefined;
    }

    return categoryGroup;

}
