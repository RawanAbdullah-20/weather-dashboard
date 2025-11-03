import { DashboardRoutes } from '@/modules/dashboard/constants/dashboard.routes'
import { createRouter, createMemoryHistory } from 'vue-router'

export const router = createRouter({
  history: createMemoryHistory(),
  routes:[...DashboardRoutes]
})