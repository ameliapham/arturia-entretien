<script setup lang="ts">

import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '~/components/ProductCard.vue'
import ProductRangeWrapper from '~/components/ProductRangeWrapper.vue';
import { parseCategoryQueryParam, serializeCategoryQueryParam, type Category } from "~/data/Category";
import { getFilteredProductsByRange } from "~/data/Product";
import CategorySelector from "~/components/CategorySelector.vue";

const route = useRoute();

/*

?categories=software-instruments,software-instruments-effects

-> route.query.categories -> 

"software-instruments,software-instruments-effects"

-> parseCategoryQueryParam ->

["software-instruments", "software-instruments-effects"]

-> getFilteredProductsByRange ->

{ "lab": [Product, Product], "brute": [Product, Product], ... }

*/

const categories = computed(() => parseCategoryQueryParam(
    route.query.categories
));

const filteredProductsByRange = computed(() => getFilteredProductsByRange({ 
    categories: categories.value 
}));

// Each time query param change, re-render everything
watch(() => route.query.categories, () => { }, { immediate: true });

function getCategoriesLink(categories: readonly Category[]) {
    return { path: '/product', query: { categories: serializeCategoryQueryParam(categories) } }
}

</script>

<template>
    <CategorySelector 
        class="category-selector my-4"
        :categories="categories" 
        :getCategoriesLink="getCategoriesLink" 
    />

    <div class="container page-product">
        <template v-for="(products, range) in filteredProductsByRange">
            <ProductRangeWrapper v-if="products.length" :key="range" :range="range">
                <div class="row">
                    <ProductCard v-for="product in products" :key="product.productCode" :product="product"
                        :class="[product.size === 'big' ? 'col-lg-6 col-md-6' : 'col-lg-3 col-md-6']" />
                </div>
            </ProductRangeWrapper>
        </template>
    </div>
</template>


<style scoped lang="scss">

    .page-product {
        padding-left: 0;
        padding-right: 0;
    }

    .category-selector {
        // sticky top
        position: sticky;
        top: 1rem;
        z-index: 100;
    }

</style>