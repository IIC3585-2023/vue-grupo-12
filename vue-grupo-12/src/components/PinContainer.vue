<script setup>
  import Pin from './Pin.vue';
  const images = await fetch('https://api.unsplash.com/photos/random?count=30', {
    method: 'GET',
    headers: { Authorization: 'Client-ID 6H1smp1FpNFz-V7LF-BHILxuuM6MYd1aC_2lFqNN_2k'}
  })
  .then(response => response.json())
  .then(images => {
    images.forEach(image => {
      image.size = getRandomSize();
    });
  });
  const getRandomSize = () => {
    var sizes = ["card_small", "card_medium", "card_large"];
    let randomIndex = Math.floor(Math.random() * sizes.length);
    return sizes[randomIndex];
  }
</script>

<template>
  <div class="pin_container">
    <Pin
    v-for="image in images"
    :key="image.id"
    :url="image.urls.regular"
    :description="image.description"
    :likes="image.likes"
    :size="image.size"
    
    />
  </div>
</template>

<style scoped>
  :root {
    --card_width: 250px;
    --row_increment: 10px;
  }
  .pin_container {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, var(--card_width));
    grid-auto-rows: var(--row_increment);
    justify-content: center;
    background-color:white;
  }
</style>