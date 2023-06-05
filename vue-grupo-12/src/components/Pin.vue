<script setup>
  defineProps({
    url: String,
    description: String,
    likes: Number,
    size: String
  })
</script>

<template>
  <div :class="`card ${size}`" >
    <img :src=url />
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
</style>