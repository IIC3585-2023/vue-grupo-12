<script setup>
  import { onMounted, computed } from "vue";
  import Pin from './Pin.vue';
  import ScrollButton from "./ScrollButton.vue";
  import { useImageStore } from "../stores/images";

  const store = useImageStore();

  const images = computed(() => {
    return store.images;
  });

  onMounted(() => {
    store.fetchImages();
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
  <ScrollButton />
</template>

<style scoped>
  .pin_container {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-auto-rows: 10px;
    justify-content: center;
    background-color: white;
}
</style>