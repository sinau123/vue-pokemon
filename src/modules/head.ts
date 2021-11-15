
import { App } from '@vue/runtime-core'
import { createHead } from '@vueuse/head'

export const install = (app: App) => {
  const head = createHead()
  app.use(head)
}
