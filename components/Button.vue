<template>
  <button :class="['btn', rangeClass, props.class]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  range: 'lab' | 'brute' | 'freak' | 'step' | 'fuse';
  class?: string;
}

const props = defineProps<Props>();

// We’ll append a class like "btn--lab", "btn--brute", etc.
const rangeClass = computed(() => `btn--${props.range}`);
</script>

<style lang="scss" scoped>

.btn {
  padding: 0.6rem 1rem;
  border: none;
  cursor: pointer;
  color: $typo-primary-contrast-color;

  &--lab {
    background-color: $lab;
  }
  &--brute {
    background-color: $brute;
  }
  &--freak {
    background-color: $freak;
  }
  &--step {
    background-color: $step;
    color: $typo-primary-color;
  }
  &--fuse {
    background-color: $fuse;
  }
}
</style>