<template>
    <nav>
        <ul>
            <li v-for="categoryGroup in allCategoryGroups" :key="categoryGroup">
                <NuxtLink :to="props.getCategoriesLink(getCategoriesFromCategoryGroup(categoryGroup))"
                    :class="{ active: categoryGroup_active === categoryGroup }">
                    {{ t(categoryGroup) }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>


<script setup lang="ts">

import { defineProps } from 'vue'
import { type CategoryGroup, allCategoryGroups, type Category, getCategoryGroupFromCategories, getCategoriesFromCategoryGroup } from "~/composables/Category";
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

<style scoped lang="scss">
    .active {
        color: $color-secondary;
        position: relative;
    }
    ul {
        display: flex;
        list-style: none;
        justify-content: center;
        padding: 0;
        gap: 24px;
    }
    a {
        text-decoration: none;
    }
</style>