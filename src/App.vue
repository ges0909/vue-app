<i18n>
{
   "gb": {
      "title": "IoT Project",
      "home": "home",
      "singin": "Sigin",
      "signup": "Signup",
      "logout": "Logout"
    },
   "de": {
      "title": "IoT Projekt",
      "home": "home",
      "singin": "Anmelden",
      "signup": "Registrieren",
      "logout": "Abmelden"
    }
}
</i18n>

<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.key }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/home" tag="span" style="cursor: pointer">
          {{ $t('title') }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in items"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <!-- <v-toolbar-items>
        <v-btn flat :to="{name: 'login'}">{{ $t('login') }}</v-btn>
        <v-btn flat :to="{name: 'signup'}">{{ $t('signup') }}</v-btn>
        <v-btn flat @click="logout">{{ $t('logout') }}</v-btn>
      </v-toolbar-items> -->
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
    sidebar: false,
    items: null,
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
    this.items = [
      { title: this.$i18n.t('home'), path: '/home', icon: 'home' }, // this.$i18n.t('home')
      { title: 'signin', path: '/signin', icon: 'lock' },
      { title: 'signup', path: '/signup', icon: 'person' }
    ]
  }
}
</script>
