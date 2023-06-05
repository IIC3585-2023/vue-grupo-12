<script setup>
import Navbar from './components/Navbar.vue';
import PinContainer from './components/PinContainer.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>

  <Suspense>
    <PinContainer />
  </Suspense>
</template>

<style scoped>
</style>
