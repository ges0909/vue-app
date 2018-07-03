<i18n>
gb: &en
  welcome:  "Welcome!"
  text:     "It's a basic Single Page application <br> with Google Firebase authentication"
  signin:   "Sign-in"
  signup:   "Sign-up"

us: *en

de:
  welcome:  "Willkommen!"
  text:     "Das ist eine Single Page Anwendung <br> mit Authentifizierung über Google Firebase"
  signin:   "Anmelden"
  signup:   "Registrieren"
</i18n>

<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>{{ $t('welcome') }}</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          <span v-html="$t('text')"></span>
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
        <v-btn color="primary" to="/signin"> {{ $t('signin') }} </v-btn>
        <v-btn color="primary" to="/signup"> {{ $t('signup') }} </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['locale'],
  watch: {
    locale (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
