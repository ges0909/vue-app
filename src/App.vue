<i18n>
{
   "en": {
      "title": "My App",
      "home": "Home",
      "singin": "Sigin",
      "signup": "Signup",
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
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <h1>{{ $t('title') }}</h1>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
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
          </v-btn>
          <v-list>
            <v-list-tile v-for="l in languages" :key="l" @click.prevent="lang=l">
              <v-list-tile-title>
                <flag :iso="l" />
              </v-list-tile-title>
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
// import { EventBus } from './eventbus'

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
      get () { return (this.$i18n.locale === 'en') ? 'gb' : this.$i18n.locale },
      set (l) { this.$i18n.locale = (l === 'gb') ? 'en' : l }
    },
    languages () { return Object.keys(this.$i18n.messages).map(l => l === 'en' ? 'gb' : l) }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.push({ path: '/login' })
      })
    }
  },
  mounted: () => {
    // EventBus.$on('changelocale', () => {
    //   alert('changelocale')
    // })
  }
}
</script>
