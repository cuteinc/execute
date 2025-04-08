import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import goToDashboard from '../views/Dashboard.vue'
import goToCalendar from '../views/Calendar.vue'
import goToUserInfo from '../views/TeamsInfo.vue'
import goToTeamsInfo from '../views/UserInfo.vue'

const routes = [
  { path: '/', component: Login }, // Login screen 
  { path: '/dashboard', component: goToDashboard }, // Dashboard screen
  { path: '/teaminfo', component: goToTeamsInfo }, // Dashboard screen
  { path: '/userinfo', component: goToUserInfo }, // Dashboard screen
  { path: '/calendar', component: goToCalendar }, // Dashboard screen


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
