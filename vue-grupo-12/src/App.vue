<script setup>
import Navbar from './components/Navbar.vue';
import PinContainer from './components/PinContainer.vue'
import { themeStorage } from './stores/themeStorage.js'
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
    <PinContainer v-bind:class = "(themeStorage.theme == 'light')?' ':'dark-background'"/>
  </Suspense>
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
.dark-background {
    background-color: black;
  }
</style>
