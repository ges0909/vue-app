import Vue from 'vue'
import axios from 'axios'
import firebase from 'firebase'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import FlagIcon from 'vue-flag-icon'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import App from './App'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuetify)
Vue.use(VueI18n)
Vue.use(FlagIcon)
Vue.use(BootstrapVue)

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

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyDof_IQSe4_L6i2jQ5eoa_SBw1IjvcCZIg',
  authDomain: 'vue-app-e9436.firebaseapp.com',
  databaseURL: 'https://vue-app-e9436.firebaseio.com',
  projectId: 'vue-app-e9436',
  storageBucket: '',
  messagingSenderId: '772873151976'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
  mounted () {} // fetch initial data
})
