<i18n>
{
   "gb": {
      "title": "IoT Project",
      "login": "Login",
      "signup": "Sign-up",
      "logout": "Logout"
    },
   "de": {
      "title": "IoT Projekt",
      "login": "Anmelden",
      "signup": "Registrieren",
      "logout": "Abmelden"
    }
}
</i18n>

<template>
  <v-app>
    <v-toolbar dark color="primary">
      <v-toolbar-title>{{ $t('title') }}</v-toolbar-title>
      <v-toolbar-items>
        <v-spacer/>
        <v-btn flat :to="{name: 'login'}">{{ $t('login') }}</v-btn>
        <v-btn flat :to="{name: 'signup'}">{{ $t('signup') }}</v-btn>
        <v-btn flat @click="logout">{{ $t('logout') }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import { EventBus } from './eventbus'

export default {
  data: () => ({
    locale: 'de',
    locales: ['gb', 'de']
  }),
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.push({ path: '/login' })
      })
    }
  },
  mounted: () => {
    EventBus.$on('changelocale', () => {
      alert('changelocale')
    })
  }
}
</script>
