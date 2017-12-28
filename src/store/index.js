import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import meta from './modules/meta'
import quiz from './modules/quiz'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  modules: {
    meta,
    quiz,
  }
})

export default store
