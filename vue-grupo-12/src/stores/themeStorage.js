import { reactive } from 'vue'

export const themeStorage = reactive({
  theme: 'light',
  toggle() {
    if(this.theme == 'light') {
      this.theme = 'dark';
    } else {
      this.theme = 'light';
    }
  }

})