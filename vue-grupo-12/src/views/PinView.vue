<script setup>
import { computed } from "vue";
import { useRoute } from 'vue-router'
import Loading from "../components/loading.vue";
import { useImageStore } from "../stores/images";
import { themeStorage } from '../stores/themeStorage.js'
import Pin from '../components/Pin.vue';

const ImageStore = useImageStore();
const route = useRoute();

const image = computed(() => {
    return ImageStore.getImageById(route.params.id);
});

const like = () => {
    ImageStore.increaseLikes(image.value.id);
}
</script>

<template>
    <div v-if="image">
        <div class="pin_container" v-bind:class="(themeStorage.theme == 'light') ? ' ' : 'dark-background'">
            <Pin :key="image.id" :url="image.urls.regular" :size="small" :onclick="() => { }" />
            <div>
                <h1 v-bind:class="(themeStorage.theme == 'light') ? ' ' : 'dark'">
                    {{ image.description || image.alt_description }}
                </h1>
                <p v-bind:class="(themeStorage.theme == 'light') ? ' ' : 'dark'">
                    {{ image.likes }}
                    <button class="like" @click="like();">❤️</button>
                </p>
            </div>
        </div>
    </div>
    <div v-else>
        <Loading />
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.pin_container {
    padding: 100px;
    display: grid;
    padding-left: 300px;
    grid-template-columns: repeat(auto-fill, 50%);
    grid-auto-rows: auto;
    justify-content: center;
    background-color: white;
    text-align: center;
}

.dark {
    color: white;
}

.dark-background {
    background-color: black;
}

.like {
    border: 0px;
    background-color: transparent;
}

.like:hover {
    cursor: pointer;
}
</style>
