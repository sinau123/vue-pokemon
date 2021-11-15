import { App } from '@vue/runtime-core'
import NProgress from 'nprogress'
import router from '~/router'

export const install = (app: App) => {
  router.beforeEach(() => { NProgress.start() })
  router.afterEach(() => { NProgress.done() })
}
