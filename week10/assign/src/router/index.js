import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rock from '../views/Rock.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rock/:name',
      name: 'rock',
      component: () => import('../views/Rock.vue')
    }
  ]
})

export default router
