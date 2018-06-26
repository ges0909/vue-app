import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'

Vue.use(Router)

const routes = [
  {
    // redirect unknown paths to Login view
    path: '*',
    redirect: 'signin'
  },
  {
    path: '/',
    redirect: 'signin'
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
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  }
]

export default new Router({
  mode: 'history',
  routes
  // beforeEach: (to, from, next) => {
  //   let currentUser = firebase.auth().currentUser
  //   let requiresAuth = to.matched.some((record) => record.meta.redirect)
  //   if (requiresAuth && !currentUser) next('sigin')
  //   else if (!requiresAuth && currentUser) next('home')
  //   else next()
  // }
})
