import HomeViewVue from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Contact from '../components/Contact.vue'
import Formation from '../components/Formation.vue'
import Skills from '../components/Skills.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/Formation.vue',
      name: 'formation',
      component: Formation
    },
    {
      path: '/Skills.vue',
      name: 'skills',
      component: Skills
    },
    {
      path: '/Contact.vue',
      name: 'home',
      component: Contact
    },
  
  ]
})

export default router
