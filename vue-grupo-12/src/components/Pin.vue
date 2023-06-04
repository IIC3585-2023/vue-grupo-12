<script setup>
  defineProps({
    id: Number,
    url: String,
    description: String,
    size: String,
    likes: Number
  })
</script>

<template>
  <div :class="`card ${size}`" >
    <img :src=url />
  </div>
</template>

<style scoped>
  :root {
    --card_border_radius: 16px;
    --card_small: 26;
    --card_medium: 33;
    --card_large: 45;
  }
  .card {
    padding: 0;
    margin: 15px 10px;
    border-radius: var(--card_border_radius);
    background-color: grey;
  }

  .card_small {
    grid-row-end: span var(--card_small);
  }

  .card_medium {
    grid-row-end: span var(--card_medium);
  }

  .card_large {
    grid-row-end: span var(--card_large);
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--card_border_radius);
  }
</style>