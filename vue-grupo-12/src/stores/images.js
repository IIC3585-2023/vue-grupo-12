//stores/users.js

import { defineStore } from 'pinia'

const getRandomSize = () => {
  var sizes = ['card_small', 'card_medium', 'card_large']
  let randomIndex = Math.floor(Math.random() * sizes.length)
  return sizes[randomIndex]
}

export const useImageStore = defineStore('images', {
  state: () => ({
    images: [],
    search: '',
    url: 'https://api.unsplash.com/photos/random?count=30'
  }),
  getters: {
    getImages(state) {
      return state.images
    },
    getImageById: (state) => (id) => {
      return state.images.find((image) => image.id === id)
    }
  },
  actions: {
    setSearch(value) {
      this.search = value
      this.url = 'https://api.unsplash.com/photos/random?count=30&query=' + this.search;
      this.fetchImages();
    },
    async fetchImages() {
      try {
        const response = await fetch(this.url, {
          method: 'GET',
          headers: { Authorization: 'Client-ID 6H1smp1FpNFz-V7LF-BHILxuuM6MYd1aC_2lFqNN_2k' }
        })
        const imageData = await response.json()
        imageData.forEach((image) => {
          image.size = getRandomSize()
        })
        this.images = imageData;
      } catch (error) {
        console.log(error)
      }
    },
    async increaseLikes(id) {
      const image = this.getImageById(id)
      image.likes++
    }
  }
})
