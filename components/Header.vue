<script setup lang="ts">




</script>

<template>
  <header class="header py-4">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">_Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/product">_Product</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/support">_Support</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style scoped lang="scss">
.header {
  background-color: #f5f5f5;

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    margin-bottom:0;

    li {
      margin-right: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  .router-link-active {
    color: $color-secondary;
  }

}
</style>