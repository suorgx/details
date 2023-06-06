import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: UsersView
    },
    {
      path: '/payments',
      name: 'Payments',
      component: () => import('../views/PaymentsView.vue')
    }
  ]
})

export default router
