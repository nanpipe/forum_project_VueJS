import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

// All imports and routs have been moved to the folder router

const forumApp = createApp(App)
forumApp.use(router)
forumApp.mount('#app')
