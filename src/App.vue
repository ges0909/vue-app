<i18n>
{
   "en": {
      "title": "My App",
      "home": "Home",
      "signin": "Sig-in",
      "signup": "Sign-up",
      "logout": "Logout"
    },
   "de": {
      "title": "Meine App",
      "home": "Home",
      "signin": "Anmelden",
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
          :to="item.path"
          v-show="item.show">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ $t(item.title) }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar=!sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title id="title">
        <h1>
          <router-link to="/" tag="span" style="cursor: pointer">
            {{ $t('title') }}
          </router-link>
        </h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="item in items"
          :key="item.title"
          :to="item.path"
          v-show="item.show">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ $t(item.title) }}
        </v-btn>
        <v-menu offset-y>
          <v-btn flat slot="activator">
            <flag :iso="lang"></flag>
            <v-spacer></v-spacer>
            {{ lang }}
          </v-btn>
          <v-list>
            <v-list-tile v-for="ln in languages" :key="ln" @click.prevent="lang=ln">
              <flag :iso="ln"></flag>
              <v-spacer></v-spacer>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ ln.toUpperCase() }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
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
    sidebar: false,
    items: [
      { title: 'home', path: '/home', icon: 'home', show: false },
      { title: 'signin', path: '/signin', icon: 'lock', show: true },
      { title: 'signup', path: '/signup', icon: 'person', show: true },
      { title: 'logout', path: '/logout', icon: 'close', show: false }
    ]
  }),
  computed: {
    lang: {
      get () {
        return (this.$i18n.locale === 'en') ? 'gb' : this.$i18n.locale
      },
      set (ln) {
        this.$i18n.locale = (ln === 'gb') ? 'en' : ln
      }
    },
    languages () {
      return Object.keys(this.$i18n.messages).map(ln => ln === 'en' ? 'gb' : ln)
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
    var self = this
    EventBus.$on('signed-in', () => {
      self.items.forEach(item => { item.show = !item.show })
    })
  }
}
</script>
