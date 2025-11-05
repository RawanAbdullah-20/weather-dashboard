import { createRouter, createMemoryHistory } from 'vue-router'
import { DashboardRoutes } from '@/modules/dashboard/constants/dashboard.routes'

export const router = createRouter({
  history: createMemoryHistory(),
  routes:[...DashboardRoutes]
})