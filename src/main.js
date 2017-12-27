import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from 'components/Home.vue'
import CourseContainer from 'components/CourseContainer.vue'
import QuizContainer from 'components/QuizContainer.vue'
import VideoContainer from 'components/VideoContainer.vue'
import store from 'store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/quiz', component: CourseContainer },
  { path: '/quiz/:level', component: QuizContainer },
  { path: '/video', component: VideoContainer },
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
