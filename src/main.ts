import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { defineCustomElements } from '@dtnum/core/loader';


const app = createApp(App)

app.use(router)

defineCustomElements().then(() => app.mount('#app'))