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
      path: '/carts',
      name: 'Carts',
      component: () => import('../views/CartsView.vue')
    }
  ]
})

export default router
