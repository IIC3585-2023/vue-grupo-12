<script setup>
  import Navbar from './components/Navbar.vue';
  import { RouterView } from 'vue-router'
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
