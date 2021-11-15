import router from '~/router'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install = () => {
  router.isReady().then(async() => {
    const { registerSW } = await import('virtual:pwa-register')
    registerSW({ immediate: true })
  })
}
