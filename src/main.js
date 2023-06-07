import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from "pinia"
import App from './App.vue'
import router from './router'

import HeaderMain from './components/HeaderMain.vue'
import MainModal from './components/MainModal.vue'

const app = createApp(App)
app.component('HeaderMain', HeaderMain)
app.component('MainModal', MainModal)
app.use(router)
app.use(createPinia())
app.mount('#app')
