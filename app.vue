<script setup lang="ts">

const count = ref(0);

function increment() { 
  count.value++; 
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1>My awesome Nuxt app</h1>
    <button @click="increment">Click me to count</button>
    <p>Count to {{ count }}</p>
  </div>
</template>

<style>
  h1 {
    color: red;
  }
  button {
    border: 5px solid blue;

    &:hover {
      background-color: blue;
      color: white;
    }
  }
</style>