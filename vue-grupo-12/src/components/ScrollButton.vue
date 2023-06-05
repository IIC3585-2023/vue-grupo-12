<script setup>
import { useImageStore } from "../stores/images";

import { ref } from 'vue';
const store = useImageStore();
let scroll = ref('scroll');
</script>

<template>
    <button :class="scroll" @click="store.fetchImages();">+</button>
</template>

<style scoped>
.scroll {
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  color: #fff;
  font-size: 18px;
  left: 50%;
  position: absolute;
}
</style>