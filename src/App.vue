<i18n>
gb: &en
  title:      "My App"
  signin:     "Sign"
  signup:     "Sign-up"
  signout:    "Sign-out"
  account:    "Account"
  help:       "Help"
  language:   "Language"
  dashboard:  "Dashboard"

us: *en

de:
  title:      "Meine App"
  signin:     "Anmelden"
  signup:     "Registrieren"
  signout:    "Abmelden"
  account:    "Konto"
  help:       "Hilfe"
  language:   "Language"
  dashboard:  "Dashboard"
</i18n>

<template>
  <v-app>

    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          to="/dashboard"
          v-show="isAuthenticated">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ $t('dashboard') }}</v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          v-show="isAuthenticated"
          @click.prevent="signout">
          <v-list-tile-action>
            <v-icon>close</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ $t('signout') }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dense="true" scroll-off-screen="true" scroll-threshold="100">

      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar=!sidebar">
        </v-toolbar-side-icon>
      </span>

      <v-toolbar-title id="title">
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ $t('title') }}
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">

        <v-tooltip bottom>
          <v-btn flat to="/dashboard" slot="activator" v-show="isAuthenticated">
            <v-icon left dark>dashboard</v-icon>
            <!-- {{ $t('dashboard') }} -->
          </v-btn>
          <span>{{ $t('dashboard') }}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <v-btn flat slot="activator" v-show="isAuthenticated">
            <v-avatar>
              <img v-if="avatar" src="./assets/gs.jpg" alt="Avatar">
              <v-icon v-else>account_circle</v-icon>
              <!-- {{ $t('account') }} -->
            </v-avatar>
          </v-btn>
          <span>{{ $t('account') }}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <v-btn flat :href="config.help.url" target="_blank" slot="activator" v-show="isAuthenticated">
            <v-icon left dark>help_outline</v-icon>
            <!-- {{ $t('help') }} -->
          </v-btn>
          <span>{{ $t('help') }}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <v-btn flat @click="signout" slot="activator" v-show="isAuthenticated">
            <v-icon left dark>close</v-icon>
            <!-- {{ $t('signout') }} -->
          </v-btn>
          <span>{{ $t('signout') }}</span>
        </v-tooltip>

        <v-menu offset-y>
          <v-btn flat slot="activator">
            <flag :iso="locale"></flag>
            <v-icon dark>arrow_drop_down</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="lang of languages" :key="lang" @click.prevent="locale=lang">
              <flag :iso="lang" size="32"></flag>
            </v-list-tile>
          </v-list>
        </v-menu>

      </v-toolbar-items>

    </v-toolbar>

    <v-content>
      <transition name="fade">
        <router-view :locale="locale"></router-view>
      </transition>
    </v-content>

  </v-app>
</template>

<script>
import config from './config'

export default {
  data: () => ({
    sidebar: false,
    avatar: false,
    config: config
  }),
  computed: {
    locale: {
      get () {
        return this.$i18n.locale
      },
      set (lang) {
        this.$i18n.locale = lang
        this.$store.dispatch('changeLocale', lang)
      }
    },
    languages () {
      return ['gb', 'us', 'de'] // Object.keys(this.$i18n.messages)
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    signout () {
      this.$store.dispatch('signout')
    }
  }
  // mounted () {
  // }
}
</script>

<style scoped>
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
</style>
