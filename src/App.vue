<i18n>
{
  "gb": {
    "title": "My App",
    "home": "Home",
    "signin": "Sig-in",
    "signup": "Sign-up",
    "signout": "Sign-out"
  },
  "de": {
    "title": "Meine App",
    "home": "Home",
    "signin": "Anmelden",
    "signup": "Registrieren",
    "signout": "Abmelden"
  }
}
</i18n>

<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>

        <v-list-tile
          to="/home"
          v-show="isAuthenticated">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ $t('home') }}</v-list-tile-content>
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

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar=!sidebar">
        </v-toolbar-side-icon>
      </span>

      <!-- <v-avatar
        tile="true"
        size="24"
        color="grey lighten-4">
        <img src="./assets/logo.png" alt="avatar">
      </v-avatar> -->
      <v-toolbar-title id="title">
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ $t('title') }}
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">

        <v-tooltip bottom>
          <v-btn flat to="/home" slot="activator" v-show="isAuthenticated">
            <v-icon left dark>home</v-icon>
            <!-- {{ $t('home') }} -->
          </v-btn>
          <span>{{ $t('home') }}</span>
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
            <v-list-tile v-for="lang in languages" :key="lang" @click.prevent="locale=lang">
              <flag :iso="lang"></flag>
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
export default {
  data () {
    return {
      sidebar: false
    }
  },
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
      return Object.keys(this.$i18n.messages)
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

/*******************************************************************************
<style scoped>
* {
text-transform: none !important;
}
</style>
 ******************************************************************************/
