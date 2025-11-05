import { createRouter, createWebHistory  } from 'vue-router'
import { DashboardRoutes } from '@/modules/dashboard/constants/dashboard.routes'

export const router = createRouter({
  history: createWebHistory (),
  routes:[...DashboardRoutes]
})