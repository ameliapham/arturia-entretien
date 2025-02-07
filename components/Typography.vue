<template>
    <!-- We choose an HTML tag based on the variant, but you could adapt as needed. -->
    <component :is="tagName" :class="['typography', variantClass, props.class]">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    variant: 'title' | 'body';
    class?: string;
}

const props = defineProps<Props>();

// Decide which HTML element to render:
const tagName = computed(() =>
    props.variant === 'title' ? 'h2' : 'p'
);

const variantClass = computed(() =>
    props.variant === 'title' ? 'typography--title' : 'typography--body'
);
</script>

<style scoped lang="scss">
.typography {
    font-family: 'supply', sans-serif;

    &--title {
        font-size: 1.5rem;
        font-weight: 700;
    }

    &--body {
        font-size: 1rem;
        font-weight: 400;
    }
}
</style>