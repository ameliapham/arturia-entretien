<template>
    <div class="news-card">
      <div class="news-image">
        <img :src="image" :alt="title" />
        <span class="tag">NEW</span>
      </div>
      <div class="news-content">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    image: string;
    title: string;
    description: string;
  }>();
  </script>
  
  <style scoped lang="scss">
  .news-card {
    width: 100%;
    background: #f5f5f5;
    overflow: hidden;
  }
  
  .news-image {
    position: relative;
    width: 100%;
  
    img {
      width: 100%;
      height: 250px;
        object-fit: cover;
      display: block;
    }
  
    .tag {
      position: absolute;
      top: 10px;
      right: 10px;
      background: white;
      padding: 4px 8px;
      font-size: 12px;
      font-weight: bold;
    }
  }
  
  .news-content {
    padding: 16px;
  }
  </style>