
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: setupLayouts(generatedRoutes),
  history: createWebHistory(),
})
export default router
