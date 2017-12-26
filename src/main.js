import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from 'components/Home.vue'
import Quiz from 'components/Quiz.vue'
import Channel from 'components/Channel.vue'
import store from 'store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/quiz/:level', component: Quiz },
  { path: '/channel', component: Channel },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
