<script setup>
  import { RouterLink } from 'vue-router'
  defineProps({
    id: String,
    url: String,
    description: String,
    likes: Number,
    size: String,
    onclick: Function
  })
</script>

<template>
  <div :class="`card ${size}`" >
    <RouterLink :to="onclick ? onclick : `/${id}`">
      <img :src="url" />
    </RouterLink>
  </div>
</template>

<style scoped>
.card {
  padding: 0;
  margin: 15px 10px;
  border-radius: 16px;
  background-color: grey;
}

.card_small {
  grid-row-end: span 26;
}

.card_medium {
  grid-row-end: span 33;
}

.card_large {
  grid-row-end: span 45;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

.card:hover {
  opacity: 0.8;
}
</style>