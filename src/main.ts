// register vue composition api globally
import { createApp } from 'vue'
import App from './App.vue'
import router from '~/router'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

// https://github.com/antfu/vite-ssg
export const app = createApp(
  App,
)

app.use(router)
Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(app))
app.mount('#app')
