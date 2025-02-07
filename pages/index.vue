<script setup lang="ts">

</script>

<template>
  <div class="home-page">
    <div class="hero">
      <video class="background-video" autoplay loop muted playsinline>
        <source src="/videos/slider-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="content">
        <h1>Pigments 6</h1>
        <h2>
          Sound design synthesizer
        </h2>
        <Button range="lab">
          Discover the offer
        </Button>
      </div>
    </div>

    <div class="products">
      <div class="product" style="background-image: url('/images/product1.jpg')">
        <div class="content-product">
          <h1>_Tape J-37</h1>
          <h2>
            Tube-driven studio effect
          </h2>
          <Button range="lab">
            Discover
          </Button>
        </div>
      </div>

      <div class="product" style="background-image: url('/images/product2.jpg')">
        <div class="content-product">
          <h1>_AudioFuse 16Rig</h1>
          <h2>
            Dive into Immersive audio
          </h2>
          <Button range="lab">
            Discover
          </Button>
        </div>
      </div>
    </div>

    <div class="news">
      <NewsCard 
        image = "/images/news1.jpg"
        title = "DrumBrute Impact 1984"
        description = "Discover a limited-edition analog drum machine that fuses a timeless look with a beefy, Brute-powered sound."
      />
      <NewsCard 
        image = "/images/news2.jpg"
        title = "MiniFreak | Granular update"
        description = "Dive deep into the world of granular synthesis with new granular engines, sounds, and more."
      />
      <NewsCard 
        image = "/images/news3.jpg"
        title = "The Glitch Mob"
        description = "Underground innovation with AudioFuse 16Rig"
      />
    </div>
  </div>
</template>



<style scoped lang="scss">
.background-video {
  width: 100%;
  display: block;
  margin: 0 auto; /* Center the video */
}
.content {
  position: absolute;
  top: 60%;
  left: 10%;
  width: 500px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  color: $color-text;
  padding: 24px;
}
.products {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 160px 0;
}
.product {
  width: 600px;
  height: 500px;
  background-size: cover;
  background-position: center;
  padding: 24px;
}
.content-product {
  width: 400px;
  background-color: rgba(91, 71, 65, 0.3);
  backdrop-filter: blur(10px);
  color: $color-text;
  padding: 24px;
}
.news {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 160px 60px;
}
</style>