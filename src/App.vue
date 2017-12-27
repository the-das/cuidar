<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from 'components/app/AppHeader.vue'
import AppFooter from 'components/app/AppFooter.vue'

export default {
  name: 'app',

  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style>

</style>
