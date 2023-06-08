import { createRouter, createWebHashHistory  } from 'vue-router'
import UsersView from '../views/UsersView.vue'

const router = createRouter({
  history: createWebHashHistory (),
  routes: [
    {
      path: '/',
      name: 'users',
      component: UsersView
    },
    {
      path: '/carts',
      name: 'Carts',
      component: () => import('../views/CartsView.vue')
    }
  ]
})

export default router
