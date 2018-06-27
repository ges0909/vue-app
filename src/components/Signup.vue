<i18n>
{
   "en": {
      "title": "Sign-up form",
      "email": "E-mail",
      "password": "Password",
      "confirm": "Confirm",
      "signup": "Signup",
      "reset": "Reset",
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
      "reset": "Abbrechen",
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
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>{{ $t('title') }}</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form>
          <v-layout column>
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
                v-model="passwordConfirmed"
                :rules="[
                  v => !!v || $t('rule.password.required')
                ]"
                required>
              </v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn @click.prevent="signup" type="submit" color="primary">{{ $t('signup') }}</v-btn>
              <v-btn @click.prevent="reset" color="primary">{{ $t('reset') }}</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      email: '',
      password: '',
      passwordConfirmed: ''
    }
  },
  methods: {
    signup (event) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        user => this.$router.push('/signin'),
        error => alert('Something went wrong: ' + error)
      )
    },
    reset (event) {
      this.email = ''
      this.password = ''
      this.$router.push('/landning')
    }
  }
}
</script>
