import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import goToCalendar from '../views/Dashboard.vue'
import goToUserInfo from '../views/Dashboard.vue'
import goToTeamsInfo from '../views/Dashboard.vue'

const routes = [
  { path: '/', component: Login }, // Login screen 
  { path: '/dashboard', component: Dashboard }, // Dashboard screen
  { path: '/teaminfo', component: goToTeamsInfo }, // Dashboard screen
  { path: '/userinfo', component: goToUserInfo }, // Dashboard screen
  { path: '/calendar', component: goToCalendar }, // Dashboard screen


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
