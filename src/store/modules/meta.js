import API from 'api'
import * as types from 'store/types'

const state = {
  content: undefined,
  /*
  {
    "title": "Das Quiz",
    "description": "다스는 누구꺼?",
    "publishDate": "12/25/2017",
    "course": [
      {
        "title": "초심자",
        "level": "beginner",
        "content": 10
      },
      {
        "title": "중급자",
        "level": "intermediate",
        "content": 10
      },
      {
        "title": "전문가",
        "level": "beginner",
        "content": 10
      }
    ]
  }
  */
}

const getters = {
}

const mutations = {
  [types.RECEIVE_META] (state, {meta}) {
    state.content = meta
  },
}

const actions = {
  [types.FETCH_META] (context) {
    API.getMeta()
      .then(meta => {
        context.commit(types.RECEIVE_META, {meta})
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
