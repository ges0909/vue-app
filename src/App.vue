// App.vue

<template>
  <v-app>
    <v-toolbar dark color="primary">
      <v-toolbar-title>IoT Project</v-toolbar-title>
      <v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn flat :to="{name: 'signup'}">signup</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
}
</script>
