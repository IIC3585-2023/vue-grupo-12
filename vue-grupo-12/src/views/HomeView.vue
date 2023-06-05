<script setup>
import { onMounted, computed } from "vue";
import Pin from '../components/Pin.vue';
import ScrollButton from "../components/ScrollButton.vue";
import Loading from "../components/loading.vue";
import { useImageStore } from "../stores/images";
import { themeStorage } from '../stores/themeStorage.js'

const store = useImageStore();

const images = computed(() => {
  return store.images;
});

onMounted(() => {
  store.fetchImages();
});
</script>

<template>
  <div v-if="images.length > 0">
    <div class="pin_container" v-bind:class="(themeStorage.theme == 'light') ? ' ' : 'dark-background'">
      <Pin v-for="image in images" 
        :key="image.id" 
        :id="image.id"
        :url="image.urls.regular" 
        :size="image.size" />
    </div>
    <ScrollButton />
  </div>
  <div v-else>
    <Loading />
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
  background-color: white;
}

.dark-background {
  background-color: black;
}
</style>