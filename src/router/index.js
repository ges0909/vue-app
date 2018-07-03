import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

// route lazy loading: https://router.vuejs.org/guide/advanced/lazy-loading.html
const Signin = () => import('@/components/Signin')
const Signup = () => import('@/components/Signup')
const Landing = () => import('@/components/Landing')
const NotFound = () => import('@/components/NotFound')
const Dashboard = () => import('@/components/Dashboard') // '@' points in vue  to 'src/'

Vue.use(Router)

const routes = [
  {
    path: '*',
    component: NotFound // catch-all route
  },
  {
    path: '/',
    redirect: 'landing'
  },
  {
    name: 'landing',
    path: '/landing',
    component: Landing
  },
  {
    name: 'signin',
    path: '/signin',
    component: Signin
  },
  {
    name: 'signup',
    path: '/signup',
    component: Signup
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new Router({
  mode: 'history',
  routes
})

// guard will be executed each time a new route is entered
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth && !isAuthenticated) {
    next('/signin')
  } else {
    next()
  }
})

export default router
