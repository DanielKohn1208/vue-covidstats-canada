import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: require('../views/HomeView.vue').default 
  },
	{
    path: '/cases',
    name: 'cases',
    component: require('../views/CasesView.vue').default 
  },
	
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
