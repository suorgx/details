import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'users',
      component: UsersView
    },
    {
      path: '/user/:id',
      name: 'User',
      component: () => import('../views/UserIdView.vue')
    },
    {
      path: '/payments',
      name: 'Payments',
      component: () => import('../views/PaymentsView.vue')
    }
  ]
})

export default router
