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

  <section :class="props.class" class="product-wrapper section range-header py-5 mt-3 w-100 theme-lab overflow-hidden p-4">
    <div class="container mb-5">
      <div class="row gutter-lg">
        <div class="col-12 col-lg-4">

          <h2 class="mb-2 text-capitalize">
            <span class="d-flex prep">
              {{ t(props.range) }}
            </span>
            <small class="d-block">range</small>
          </h2>
          <p class="mb-3 small">
            {{ t(`${props.range}-description`) }}
          </p>

          <Button
            :range="props.range"
          >Discover the range</Button>

        </div>
        <div class="col-12 col-lg-8 pt-4 pt-lg-0">

        </div>

      </div>
    </div>
    <slot></slot>
  </section>

</template>


<style scoped lang="scss">

.product-wrapper {
  background-color: $bg-main;
}



</style>