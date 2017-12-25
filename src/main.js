import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from 'components/Home.vue'
import Quiz from 'components/Quiz.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/quiz/:level', component: Quiz }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
