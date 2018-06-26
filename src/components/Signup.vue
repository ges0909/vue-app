<i18n>
{
   "gb": {
      "title": "Sign-up form",
      "remark": "You have already an account? Login",
      "here": "here",
      "label": {
        "email": "E-mail",
        "password": "Password",
        "login": "Login",
        "reset": "Reset"
      },
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
      "remark": "Sie haben schon ein Konto? Melden Sie sich",
      "here": "hier",
      "label": {
        "email": "E-Mail",
        "password": "Passwort",
        "login": "Anmelden",
        "reset": "Abbrechen"
      },
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
  <v-app id="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>{{ $t('title') }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-menu offset-y>
                  <v-btn slot="activator" color="primary" icon>
                    <flag :iso="locale" />
                  </v-btn>
                  <v-list>
                    <v-list-tile v-for="loc in locales" :key="loc" @click="locale=loc">
                      <v-list-tile-title>
                        <flag :iso="loc" />
                      </v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="person"
                    name="email"
                    :label="$t('label.email')"
                    type="text"
                    v-model="email"
                    :rules="[
                      v => !!v || $t('rule.email.required'),
                      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || $t('rule.email.valid')
                    ]"
                    required>
                  </v-text-field>
                  <v-text-field
                    prepend-icon="lock"
                    name="password"
                    :label="$t('label.password')"
                    type="password"
                    v-model="password"
                    :rules="[
                      v => !!v || $t('rule.password.required')
                    ]"
                    required>
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="onSubmit">
                  {{ $t('label.login') }}
                </v-btn>
                <v-btn color="primary" @click="onReset">
                  {{ $t('label.reset') }}
                </v-btn>
              </v-card-actions>
            </v-card>
            {{ $t('remark') }} <router-link to="sign-up">{{ $t('here') }}</router-link>.
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      locale: 'de',
      locales: ['gb', 'de'],
      email: '',
      password: ''
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  },
  methods: {
    onSubmit (event) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        user => alert('You are registered successfully!'),
        error => alert('Something went wrong: ' + error)
      )
    },
    onReset (event) {
      this.email = ''
      this.password = ''
    }
  }
}
</script>
