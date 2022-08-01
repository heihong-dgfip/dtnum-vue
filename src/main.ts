import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { defineCustomElements } from '@dtnum/core/loader';

import './assets/main.css'

const app = createApp(App)

app.use(router)

defineCustomElements().then(() => app.mount('#app'))