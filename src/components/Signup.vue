<i18n>
{
  "gb": {
    "title": "Sign-up form",
    "email": "E-mail",
    "password": "Password",
    "confirm": "Confirm",
    "signup": "Sign-up",
    "cancel": "Cancel",
    "nomatch": "Passwords don\\'t match",
    "rule": {
      "email": {
        "required": "E-mail is required",
        "valid": "E-mail must be valid"
      },
      "password": {
        "required": "Passwort is required"
      }
    }
  },
  "de": {
    "title": "Registrierung",
    "email": "E-Mail",
    "password": "Passwort",
    "confirm": "Wiederholung",
    "signup": "Registrieren",
    "cancel": "Abbrechen",
    "nomatch": "Passwörter stimmen nicht überein",
    "rule": {
      "email": {
        "required": "E-Mail ist erforderlich",
        "valid": "E-Mail ist ungültig"
      },
      "password": {
        "required": "Passwort ist erforderlich"
      }
    }
  }
}
</i18n>

<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form @submit.prevent="signup">
          <v-layout column>

            <v-flex>
              <v-alert type="error" dismissible transition="fade-transition" v-model="alert">
                {{ error }}
              </v-alert>
            </v-flex>

            <v-flex xs12 class="text-xs-center" mt-5>
              <h1>
                {{ $t('title') }}
              </h1>
            </v-flex>

            <v-flex>
              <v-text-field
                :label="$t('email')"
                type="email"
                v-model="email"
                :rules="[
                  v => !!v || $t('rule.email.required'),
                  v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || $t('rule.email.valid')
                ]"
                required>
              </v-text-field>
            </v-flex>

            <v-flex>
              <v-text-field
                :label="$t('password')"
                type="password"
                v-model="password"
                :rules="[
                  v => !!v || $t('rule.password.required')
                ]"
                required>
              </v-text-field>
            </v-flex>

            <v-flex>
              <v-text-field
                :label="$t('confirm')"
                type="password"
                v-model="passwordConfirm"
                :rules="[comparePasswords]"
                required>
              </v-text-field>
            </v-flex>

            <v-flex class="text-xs-center" mt-5>
              <v-btn type="submit" color="primary" :disabled="loading">
                {{ $t('signup') }}
              </v-btn>
              <v-btn @click.prevent="cancel" color="primary">
                {{ $t('cancel') }}
              </v-btn>
            </v-flex>

          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    passwordConfirm: '',
    alert: false
  }),
  computed: {
    comparePasswords () {
      return this.password === this.passwordConfirm ? true : this.$t('nomatch')
    },
    error () {
      return this.$store.state.error
    },
    loading () {
      return this.$store.state.loading
    },
    locale () {
      return this.$store.state.locale
    }
  },
  watch: {
    error (value) {
      if (value) {
        this.alert = true
      }
    },
    alert (value) {
      if (!value) {
        this.$store.commit('setError', null)
      }
    },
    locale (lang) {
      this.$i18n.locale = lang
    }
  },
  methods: {
    signup (event) {
      if (!this.comparePasswords) { // computed property, therefore no '()'
        return
      }
      this.$store.dispatch('signup', { email: this.email, password: this.password })
    },
    cancel (event) {
      this.email = ''
      this.password = ''
      this.$router.push('/landing')
    }
  }
}
</script>
