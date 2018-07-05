<i18n>
gb: &en
  notfound: "Oops, something seems to have gone wrong!"
us: *en
de:
  notfound: "Oops, da scheint wohl <br> etwas schief gegangen zu sein!"
</i18n>

<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1 v-html="$t('notfound')"></h1>
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
