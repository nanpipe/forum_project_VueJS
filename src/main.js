import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

// All imports and routs have been moved to the folder router

const forumApp = createApp(App)
forumApp.use(router)

// To Register all base components globally that starts with 'App' name.
const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  forumApp.component(baseComponentName, baseComponentConfig)
})

forumApp.mount('#app')
