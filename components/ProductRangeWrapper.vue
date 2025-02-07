<script setup lang="ts">

import type { Range } from "@/composables/Product";
import Button from "@/components/Button.vue";

const props = defineProps<{
    class?: string;
    range: Range;
}>();

function t(key: Range | `${Range}-description`) {
  switch (key) {
    case 'lab':
      return 'Lab';
    case 'lab-description':
      return 'Integrated software instruments and midi controllers';

    case 'brute':
      return 'Brute';
    case 'brute-description':
      return 'Raw analog synthesizers';

    case 'freak':
      return 'Freak';
    case 'freak-description':
      return 'Edgy digital synthesizers';

    case 'step':
      return 'Step';
    case 'step-description':
      return 'Universal sequencing controllers';

    case 'fuse':
      return 'Fuse';
    case 'fuse-description':
      return 'Audio Interfaces & Effects';
  }
}

</script>

<template>
    <div :class="props.class">
        <section :class="[
            'product-range-header',
            `product-range-header--${props.range}`
        ]">
            <!-- Left text block -->
            <div class="product-range-header__content">
                <!-- Title, e.g. _Lab / Range -->
                <h1 class="product-range-header__title">
                    {{ `_${t(props.range)}` }}<br />
                    <h2>Range</h2>
                </h1>

                <!-- Hard-coded description for now -->
                <p class="product-range-header__description">
                    {{ t(`${props.range}-description`) }}
                </p>

                <Button range="lab">
                    Discover the range
                </Button>

            </div>

            <!-- Bold geometric shapes / background accent 
           This is just an example shape container -->
            <div class="product-range-header__shapes"></div>
        </section>
        <slot></slot>
    </div>
</template>


<style scoped lang="scss">

.product-range-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem;
    background: #fff;
    /* or your chosen background */
    position: relative;

    &__content {
        max-width: 400px;
        z-index: 10;
    }

    &__title {
        margin-bottom: 0.5rem;
    }

    &__description {
        font-size: 1rem;
        margin-bottom: 1.5rem;
        line-height: 1.4;
    }

    &__button {
        background: black;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        cursor: pointer;
        font-family: 'supply', sans-serif;
        /* adapt as needed */
    }

    /* The big shape area */
    &__shapes {
        /* You can position your colored rectangles / shapes here */
        width: 50%;
        height: 200px;
        margin-left: 2rem;
    }

    /* The color depends on the range prop */
    &--lab .product-range-header__shapes {
        background-color: $lab;
    }

    &--fuse .product-range-header__shapes {
        background-color: $fuse;
    }

    &--brute .product-range-header__shapes {
        background-color: $brute;
    }

    &--freak .product-range-header__shapes {
        background-color: $freak;
    }

    &--step .product-range-header__shapes {
        background-color: $step;
    }
}
</style>