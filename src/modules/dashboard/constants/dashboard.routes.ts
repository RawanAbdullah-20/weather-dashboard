import type { RouteRecordRaw } from 'vue-router'

export const DashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/DashboardView.vue')
  }
]