<!-- Bootstrap Vue -->

<template>
  <b-container>
    <b-card align="center" style="max-width: 20rem;">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group>
          <b-form-input
            type="email"
            v-model="form.email"
            placeholder="Email"
            required>
          </b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            type="password"
            v-model="form.password"
            placeholder="Password"
            required>
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
      .then(
        user => alert('You are registered successfully!'),
        error => alert('Something went wrong: ' + error)
      )
    },
    onReset (event) {
      event.preventDefault()
      this.form.email = ''
      this.form.password = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>
