<script setup lang="ts">




</script>

<template>
  <header class="header">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/product">Product</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/support">Support</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style scoped lang="scss">
.header {
  background-color: #f5f5f5;
  padding: 1rem;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-right: 1rem;
    }
  }

  .router-link-active {
    border: 1px solid red;
  }

}
</style>