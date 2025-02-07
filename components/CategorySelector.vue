<script setup lang="ts">

import { type CategoryGroup, allCategoryGroups, type Category, getCategoryGroupFromCategories, getCategoriesFromCategoryGroup } from "~/data/Category";
import type { RouteLocationRaw } from "vue-router";

const props = defineProps<{
    categories: readonly Category[];
    getCategoriesLink: (categories: readonly Category[]) => RouteLocationRaw;
}>();

const categoryGroup_active = computed(() => getCategoryGroupFromCategories(props.categories));

// TODO: Implement actual i18n
function t(categoryGroup: CategoryGroup): string {
    switch (categoryGroup) {
        case "hardware-synthesizers": return "Hardware Synthesizers";
        case "controllers": return "Controllers";
        case "audio": return "Audio";
        case "software-instruments": return "Software Instruments";
        case "software-effects": return "Software Effects";
        case "other": return "Other";
        case "any": return "All Products";
    }
}
</script>

<template>
    <nav class="category-selector py-2 container px-5">
        <ul class="navbar-nav flex-row d-lg-flex flex-wrap justify-content-center">
            <li v-for="categoryGroup in allCategoryGroups" :key="categoryGroup">
                <NuxtLink :to="props.getCategoriesLink(getCategoriesFromCategoryGroup(categoryGroup))"
                    :class="{ active: categoryGroup_active === categoryGroup }">
                    {{ t(categoryGroup) }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
.category-selector {

    background-color: $bg-app-white;

    .active {
        color: $color-secondary;
        position: relative;
    }

    ul {
        //display: flex;
        list-style: none;
        justify-content: center;
        padding: 0;
        gap: 24px;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: $typo-primary-color;

        &:hover {
            color: $color-secondary;
        }
    }



}
</style>