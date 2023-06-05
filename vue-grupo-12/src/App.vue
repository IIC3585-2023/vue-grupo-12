<script setup>
  import Navbar from './components/Navbar.vue';
  import PinContainer from './components/PinContainer.vue'
  import { useImageStore } from "./stores/images";

  const store = useImageStore();

  const updateSearch = (value) => {
    store.setSearch(value);
  };
</script>

<template>
  <header>
    <Navbar id="navbar" @update-search="updateSearch" />
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
