// main.js

import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import FlagIcon from 'vue-flag-icon'
import router from './router'
import App from './App'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)
Vue.use(VueI18n)
Vue.use(FlagIcon)

Vue.config.productionTip = false

export const HTTP = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})

const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'en'
})

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
  mounted () {} // fetch initial data
})
