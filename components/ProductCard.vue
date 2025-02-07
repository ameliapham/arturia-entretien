<script setup lang="ts">
import Typography from '@/components/Typography.vue';
import Button from '@/components/Button.vue';
import type { Product } from "@/composables/Product";

type Props = {
  product: Product;
  class?: string;
};

const props = defineProps<Props>();

</script>

<template>
  <div :class="['product-card', `product-card--${product.range}`, props.class]">

    <div v-if="props.product.tag" class="product-card__tag">
      {{ props.product.tag }}
    </div>

    <div class="product-card__image-wrapper">
      <img :src="`/product-images/${product.productCode}.png`" :alt="product.name" class="product-card__image" />
    </div>

    <Typography variant="title" class="product-card__title">
      {{ `_${product.name}` }}
    </Typography>

    <Typography variant="body" class="product-card__subtitle">
      {{ product.description }}
    </Typography>

    <div class="product-card__bottom">
      <template v-if="product.price !== undefined">
        <Button :range="product.range">
          {{ product.price }}€ Buy Now
        </Button>
      </template>
      <template v-else>
        <Button :range="product.range" class="product-card__outofstock">
          Out Of Stock
        </Button>
      </template>
    </div>

  </div>
</template>


<style lang="scss" scoped>

.product-card {
  position: relative;
  background: #eee;
  padding: 1rem;

  /* Each range could have a top bar or accent color: 
     here's a generic example if you want a left border or background. */
  &--lab {
    // e.g. you might highlight a border:
    border-left: 0.5rem solid $lab;
  }

  &--brute {
    border-left: 0.5rem solid $brute;
  }

  &--freak {
    border-left: 0.5rem solid $freak;
  }

  &--step {
    border-left: 0.5rem solid $step;
  }

  &--fuse {
    border-left: 0.5rem solid $fuse;
  }

  &--small {
    width: 300px;
  }

  &--big {
    width: 500px;
  }

  &__tag {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-size: 0.75rem;
    padding: 0.2rem 0.4rem;
  }

  &__image-wrapper {
    text-align: center;
    margin-bottom: 1rem;
  }

  &__image {
    max-width: 100%;
    object-fit: contain;
  }

  &__title {
    margin-bottom: 0.5rem;
  }

  &__subtitle {
    margin-bottom: 1rem;
  }

  &__bottom {
    margin-top: 1rem;
  }

  &__outofstock {
    /* Give an alternate style if needed */
    opacity: 0.6;
  }
}
</style>