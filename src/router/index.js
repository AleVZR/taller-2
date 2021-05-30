import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/error',
    name: 'Error',
    component: Home
  },
  {
    path: '*',
    redirect: '/error'
  },
  {
    path: '/',
    redirect: '/most-popular'
  },
  {
    path: '/most-popular',
    name: 'Most Popular',
    component: () => import('../views/MostPopular.vue')
  },
  {
    path: '/top-rated',
    name: 'Top Rated',
    component: () => import('../views/TopRated.vue')
  },
  {
    path: '/movies/:id',
    name: 'Movies',
    component: () => import('../views/MovieView.vue')
  },
  {
    path: '/movies/*',
    redirect: '/error'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let normalTitle = `${ process.env.VUE_APP_TITLE } - ${ to.name }`
  let titleForMovies = `${ process.env.VUE_APP_TITLE } - ${ to.params.title }`
  document.title = to.params.title ? titleForMovies : normalTitle
  next()
})

export default router
