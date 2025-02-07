<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="layout">
    <Header ></Header>
    <main>
      <slot ></slot>
    </main>
    <Footer ></Footer>
  </div>
</template>


<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
}
</style>