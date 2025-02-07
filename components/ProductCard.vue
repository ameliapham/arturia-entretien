<script setup lang="ts">
import Button from '@/components/Button.vue';
import type { Product } from "@/composables/Product";

type Props = {
  product: Product;
  class?: string | string[];
};

const props = defineProps<Props>();

</script>

<template>
  <div :class="['product-card', 'p-2', props.class]">


    <div class="content py-5">

      <span class="tag p-1" :class="`color--${props.product.range}`">
        {{ props.product.tag }}
      </span>

      <div class="w-100 overflow-hidden">
        <img :src="`/product-images/${product.productCode}.png`" width="400" :alt="product.name" />
      </div>
      <div class="bellow-img flex-grow-1 d-flex flex-column align-items-start">
        <h3 class="prep mb-1">{{ product.name }}</h3>
        <p class="h4 small mb-0">
          <span>{{ product.description }}</span>
        </p>
        <div class="mt-3 flex-grow-1 d-flex align-items-end">


          <template v-if="product.price !== undefined">
            <Button :range="product.range">
              {{ product.price }}€ Buy Now
            </Button>
          </template>
          <template v-else>
            <Button :range="product.range">
              Out Of Stock
            </Button>
          </template>

        </div>
      </div>



    </div>




  </div>
</template>


<style lang="scss" scoped>
.product-card {

  background-color: $bg-card;
  background-clip: content-box;

  .content {

    position: relative;

    .tag {
      position: absolute;
      top: 0;
      right: 0;
      background-color: $bg-main;
      text-transform: uppercase;
    }
  }

  .bellow-img {
    padding: 2rem 1.5rem 0;
  }

  img {
    position: relative;
    left: 4rem;

    transition: left 0.3s ease-in-out;

    &:hover {
      left: 2rem;
    }

  }

}
</style>