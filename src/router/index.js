// src/router/index.js
 
import { createRouter, createWebHistory } from 'vue-router'
import ArticlePage from '../components/ArticlePage.vue'
import BlogPage from '../components/BlogPage.vue'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale',
      name: 'home',
      component: BlogPage
    },
    { path: '/blog/:locale/:slug', component: ArticlePage },
  ]
})
 
export default router