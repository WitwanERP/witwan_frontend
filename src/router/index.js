import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:licencia/',
      name: 'dashboard',
      props: true,
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/producto/:id',
      name: 'producto',
      props: true,
      component: () => import('../views/ProductoView.vue')
    }
  ]
})

export default router
