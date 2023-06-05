<script setup>
  import Navbar from './components/Navbar.vue';
  import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <Navbar id="navbar" />
  </header>
  <br>
  <br>
  <br>
  <br>
  <Suspense id="pin-container" >
  </Suspense>
  <RouterView />
</template>

<style scoped>
html {
  background-color: green;
}
#navbar {
  position: fixed;
  width: 100%;
  top: -0px;
}
</style>
