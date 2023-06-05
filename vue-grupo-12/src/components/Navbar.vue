<script>
  import { themeStorage } from '../stores/themeStorage.js'
  export default {
  data() {
    return {
      themeStorage
    }
  }
}
</script>

<template>
  <div class="pinterest" v-bind:class = "(themeStorage.theme == 'light')?' ':'dark-background'">
    <div class="left">
      <a href="#" class="logo">
        <img alt="Pucterest logo" src="@/assets/pint_logo.png" width="50" height="50" />
        
      </a>
    </div>
    <div class="search" v-bind:class = "(themeStorage.theme == 'light')?' ':'dark-background'">
      <i class="fas fa-search"></i>
      <input type="search" name="" placeholder="Search" id="search-bar">
    </div>
    <div class="right">
      <a href="#" class="items"><i class="fas fa-bell"></i></a>
      <a href="#" class="items"><i class="far fa-comment-dots"></i></a>
      <a href="#" class="avatar">
        <div class="img"><img src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80" alt=""></div>
      </a>
      <!-- obtenido de https://dev.to/tqbit/create-your-own-dark-mode-toggle-component-with-vue-js-1284 -->
      <div>
        <button class="darkmode-switch items" @click="themeStorage.toggle()">
          {{ (themeStorage.theme == 'light')? '🌙':'☀️' }}
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

/* obtenido de https://dev.to/tqbit/create-your-own-dark-mode-toggle-component-with-vue-js-1284 */
.darkmode-switch {
  background: transparent;
  border: none;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background: #f6f6f6;
  }
  * a {
    text-decoration: none;
    color: #151515;
  }
  .pinterest {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 0.938rem;
  }
  
  div.dark-background {
    background-color: black;
  }
  div.search.dark-background {
    background-color: #767676;
  }
  div.search.dark-background input {
    color: white;
  }
  div.search.dark-background input::placeholder {
    color: lightgray;
  }

  .left {
    display: flex;
    align-items: center;
    width: 20%;
  }
  .left .logo {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left .logo:hover {
    background-color: #e5e5e5;
  }
  .left .logo img {
    color: #e60022;
    font-size: 24px;
    height: inherit;
    width: inherit;
  }
  .left .home {
    font-weight: bold;
    height: 3rem;
    color: #fff;
    padding: 1rem;
    background-color: #151515;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.563rem;
  }
  .avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .avatar .img {
    height: 2rem;
    width: 2rem;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }
  .avatar .img img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .search {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    border-radius: 25px;
    overflow: hidden;
    background: #e3e3e3;
  }
  .search:hover {
    background: #c9c9c9;
  }
  .search i {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #767676;
  }
  .search input {
    width: 100%;
    border: none;
    background: none;
    outline: none;
    padding-right: 1rem;
  }
  .search input::placeholder {
    color: #767676;
    font-size: 1rem;
  }
  .right {
    width: 20%;
    display: flex;
    align-items: center;
  }
  .items {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .items:hover {
    background: #e5e5e5;
  }
  .items i {
    font-size: 1rem;
    color: #767676;
  }
  .items-down {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem;
  }
  .items-down:hover {
    background: #e5e5e5;
  }
</style>