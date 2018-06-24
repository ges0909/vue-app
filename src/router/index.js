import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Welcome from '@/components/Welcome'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      // redirect unknown paths to Login view
      path: '*',
      redirect: 'login'
    },
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: Signup
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some((record) => record.meta.redirect)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('/welcome')
  else next()
})

export default router
