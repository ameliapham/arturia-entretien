<template>
  <div class="support-page">
    <div class="header">
      <h1>_Support</h1>
      <p>If you need any help, it's the place for the answer!</p>
    </div>

    <div class="content">
      <NewsCard
        image="/images/support1.jpg"
        title="_Register your product"
        description="Register your product and get access to technical support, upgrade promotions and newsletter."
      >
        Register now
      </NewsCard>
      <NewsCard
        image="/images/support2.jpg"
        title="The Arturia Software Center"
        description="Arturia Software Center is the hub to download, install, and update all your Arturia's software products."
      >
        Get the ASC
      </NewsCard>
      <NewsCard
        image="/images/support3.jpg"
        title="_The MIDI Control Center"
        description="The MIDI Control Center (MCC) is your go-to tool for updating your firmware, managing controller settings and accessing the MIDI console."
      >
        Get the MCC
      </NewsCard>
    </div>
  </div>
</template>

<script setup lang="ts">
// Optionally, declare the layout:
// definePageMeta({ layout: 'default' })
</script>

<style scoped lang="scss">

  .header {
    background-image: url('/images/support-header.jpg');
    background-size: cover;
    background-position: center;
    color: $color-text;
    padding: 0 160px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin: 160px 60px;
  }
</style>