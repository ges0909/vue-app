import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // defines application data; you can also set default or initial state here
  state: {
    user: null,
    error: null,
    loading: false
  },

  // defines calls that will commit changes to your store
  actions: {
    signup ({ commit }, payload) {
      commit('setLoading', true)
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((firebaseUser) => {
          commit('setUser', { email: firebaseUser.email })
          commit('setLoading', false)
          router.push('/signin')
        })
        .catch((error) => {
          commit('setError', error.message)
          commit('setLoading', false)
        })
    },
    signin ({ commit }, payload) {
      commit('setLoading', true)
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((firebaseUser) => {
          commit('setUser', { email: firebaseUser.email })
          commit('setLoading', false)
          router.push('/home')
        })
        .catch((error) => {
          commit('setError', error.message)
          commit('setLoading', false)
        })
    },
    signout ({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
      router.push('/')
    },
    autoSignin ({ commit }, payload) {
      commit('setUser', { email: payload.email })
    }
  },

  // are the only place that the store can be updated
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },

  // are a way to grab computed data from the store
  getters: {
    isAuthenticated: (state) => state.user !== null && state.user !== undefined
  },

  // provides a way to split your store in multiple stores
  modules: {}
})

// read: https://medium.com/wdstack/vue-vuex-getting-started-f78c03d9f65
