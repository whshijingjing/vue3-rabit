import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/Login/index.vue'
import layout from '@/views/Layout/index.vue'
import home from '@/views/Home/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: home,
        }
      ]
    },

  ],
})

export default router
