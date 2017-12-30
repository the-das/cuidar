import Vue from 'vue'
import Vuex from 'vuex'

// import * as getters from './getters'
import meta from './modules/meta'
import quiz from './modules/quiz'

Vue.use(Vuex)

const store = new Vuex.Store({
  // getters,
  modules: {
    meta,
    quiz,
  }
})

if (module.hot) {
  module.hot.accept(['./getters', './modules/meta', './modules/quiz'], () => {
    // const newGetters = require('./getters').default
    const newModuleMeta = require('./modules/meta').default
    const newModuleQuiz = require('./modules/quiz').default
    store.hotUpdate({
      // getters: newGetters,
      modules: {
        meta: newModuleMeta,
        quiz: newModuleQuiz,
      }
    })
  })
}

export default store
