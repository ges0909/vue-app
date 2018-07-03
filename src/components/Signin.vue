<i18n>
gb: &en
  title:    "Sign-in form"
  email:    "E-mail"
  password: "Password"
  signin:   "Sign-in"
  cancel:   "Cancel"
  rule:
    email:
      required: "E-mail is required"
      valid:    "E-mail must be valid"
    password:
      required: "Passwort is required"

us: *en

de:
  title:    "Anmeldung"
  email:    "E-Mail"
  password: "Passwort"
  signin:   "Anmelden"
  cancel:   "Abbrechen"
  rule:
    email:
      required: "E-Mail ist erforderlich"
      valid:    "E-Mail ist ungültig"
    password:
      required: "Passwort ist erforderlich"
</i18n>

<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form  @submit.prevent="signin">
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
                name="email"
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

            <v-flex class="text-xs-center" mt-5>
              <v-btn type="submit" color="primary" :disabled="loading">
                {{ $t('signin') }}
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
  props: ['locale'],
  data: () => ({
    email: '',
    password: '',
    alert: false
  }),
  computed: {
    error () {
      return this.$store.state.error
    },
    loading () {
      return this.$store.state.loading
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
    signin (event) {
      this.$store.dispatch('signin', { email: this.email, password: this.password })
    },
    cancel (event) {
      this.email = ''
      this.password = ''
      this.$router.push('/landing')
    }
  }
  // beforeCreate () {
  // },
  // created () {
  // },
  // beforeMount () {
  // },
  // mounted () {
  // },
  // beforeUpdate () {
  // },
  // updated () {
  // },
  // beforeDestroy () {
  // },
  // destroyed () {
  // }
}
</script>
