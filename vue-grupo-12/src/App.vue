<script setup>
  import Navbar from './components/Navbar.vue';
  import PinContainer from './components/PinContainer.vue'
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
    <PinContainer/>
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
</style>
