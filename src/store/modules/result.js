import API from 'api'
import * as types from 'store/types'

const state = {
  content: {
    beginner: [],
    intermediate: [],
    export: [],
  },
}

const getters = {
}

const mutations = {
  [types.ANSWER_QUESTION] (state, {level, result}) {
    state.content[level].push(result)
  },
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions,
}
