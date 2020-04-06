import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Cats from '../views/Cats'
import Dogs from '../views/Dogs'
import Pet from '../views/Pet'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
