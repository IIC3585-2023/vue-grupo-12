<script setup>
  import { onMounted, ref } from 'vue';
  import Pin from './Pin.vue';

  const images = ref([]);

  const getRandomSize = () => {
    var sizes = ['card_small', 'card_medium', 'card_large'];
    let randomIndex = Math.floor(Math.random() * sizes.length);
    return sizes[randomIndex];
  }

  onMounted(async () => {
    const response = await fetch('https://api.unsplash.com/photos/random?count=30', {
      method: 'GET',
      headers: { Authorization: 'Client-ID 6H1smp1FpNFz-V7LF-BHILxuuM6MYd1aC_2lFqNN_2k'}
    });
    const imageData = await response.json();
    imageData.forEach(image => {
      image.size = getRandomSize();
    });
    images.value = imageData;
  });
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
  .pin_container {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-auto-rows: 10px;
    justify-content: center;
    background-color:white;
  }
</style>