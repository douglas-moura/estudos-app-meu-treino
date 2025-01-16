import './assets/css/main.css'
import 'v-calendar/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from "@iconify/vue"

import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VCalendar, {})

app.component('Icon', Icon)

app.mount('#app')