import { createApp } from 'vue'
import { createPinia } from "pinia"
import App from './App.vue'
// import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import './assets/main.css'

const app = createApp(App)

const pinia = createPinia();
// pinia.use(piniaPluginPersistedState)

app.use(pinia)
app.mount("#app")