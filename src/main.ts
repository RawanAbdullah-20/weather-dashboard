import { createApp } from 'vue'
import '@/modules/core/styles/main.css'
import { pinia } from '@/plugins/pinia'
import App from './App.vue'
import { router } from './plugins/router'


createApp(App).use(router).use(pinia).mount('#app')
