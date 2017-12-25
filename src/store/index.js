import Vue from 'vue'
import Vuex from 'vuex'

import meta from './modules/meta'
import quiz from './modules/quiz'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    meta,
    quiz,
  }
})

export default store
