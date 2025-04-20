import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogList from '../views/BlogList.vue'
import BlogPost from '../views/BlogPost.vue'
import Portfolio from '../views/Portfolio.vue'
import History from '../views/History.vue'
import Myschedule from '../views/Myschedule.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/posts', component: BlogList },
  { path: '/posts/:id', component: BlogPost },
  { path: '/portfolio', component: Portfolio },
  { path: '/History', component: History },
  { path: '/Myschedule', component: Myschedule },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

