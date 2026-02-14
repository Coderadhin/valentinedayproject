import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gift from '../views/Gift.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/gift', name: 'Gift', component: Gift }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
