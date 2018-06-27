<i18n>
{
   "en": {
      "title": "Sign-in form",
      "email": "E-mail",
      "password": "Password",
      "signin": "Signin",
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
      "title": "Anmeldung",
      "email": "E-Mail",
      "password": "Passwort",
      "signin": "Anmelden",
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
                required
                v-model="email">
              </v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                :label="$t('password')"
                type="password"
                required
                v-model="pssword">
              </v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn @submit.prevent="signin" color="primary" type="submit">{{ $t('signin') }}</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import {HTTP} from '../main'
import firebase from 'firebase'
import { EventBus } from '../eventbus'

export default {
  data: () => ({
    email: '',
    password: '',
    response: [],
    errors: []
  }),
  methods: {
    signin (event) {
      // HTTP.post('posts', {})
      //   .then(response => {
      //     this.response = response.data
      //     this.$router.push({ path: '/welcome' })
      //   })
      //   .catch(e => {
      //     this.errors.push(e)
      //   })
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user => this.$router.push('/home'),
        error => alert('Oops! : ' + error)
      )
    }
  }
}
</script>
