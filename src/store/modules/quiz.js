import { set } from 'vue'
import API from 'api'
import * as types from 'store/types'

const state = {
  collections: {
    // "beginner": {
    //   "level": "beginner",
    //   "title": "다스는 누구꺼?",
    //   "subject": "초심자",
    //   "time": "10분",
    //   "content": [
    //     {
    //       "question": "1 + 2 = ?",
    //       "text": "1 + 1 = 2,\n 1 + 2 = ?,\n 1 + 3 = 4",
    //       "example": [
    //         "1",
    //         "2",
    //         "3",
    //         "4"
    //       ],
    //       "answer": 3,
    //       "explanation": "1 + 2 = 3"
    //     },
    //     {
    //       "question": "10 + 1 = ?",
    //       "example": [
    //         "10",
    //         "11",
    //         "12",
    //         "13"
    //       ],
    //       "answer": 2,
    //       "explanation": "10 + 1 = 11"
    //     }
    //   ]
    // },
    // "intermediate": {},
    // "expert": {},
  },
  results: {
    // beginner: [],
    // intermediate: [],
    // export: [],
  },
  currentLevel: undefined,
  currentIndex: undefined,
}

const getters = {
  currentQuizCollection: (state) => state.collections[state.currentLevel],
  currentQuizResult: (state) => state.results[state.currentLevel],
  currentQuiz: (state) => {
    return state.collections[state.currentLevel]
      ? state.collections[state.currentLevel].content[state.currentIndex]
      : undefined
  }
}

const mutations = {
  [types.RECEIVE_QUIZ] (state, { quiz, level }) {
    state.collections = { ...state.collections, [level]: quiz }
    state.results = { ...state.results, [level]: [] }
  },
  [types.SELECT_LEVEL] (state, { level }) {
    state.currentLevel = level
  },
  [types.NEXT_QUIZ] (state) {
    if (!state.currentIndex && state.currentIndex != 0) {
      state.currentIndex = 0
    } else {
      state.currentIndex++
    }
  },
  [types.ANSWER_QUIZ] (state, { result }) {
    state.results[state.currentLevel].push(result)
  },
}

const actions = {
  [types.FETCH_QUIZ] (context, { level }) {
    API.getQuiz(level)
      .then(quiz => {
        context.commit(types.RECEIVE_QUIZ, { quiz, level })
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
