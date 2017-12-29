import API from 'api'
import * as types from 'store/types'

const state = {
  content: {
    // "beginner": {
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
  currentList: (state) => state.content[state.currentLevel],
  // currentQuiz: (state) => state.currentLevel && state.content[state.currentLevel],
}

const mutations = {
  [types.SELECT_LEVEL] (state, {level}) {
    state.currentLevel = level
  },
  [types.RECEIVE_QUIZ] (state, {level, quiz}) {
    state.content[level] = quiz
    state.results = { ...state.results, [level]: [] }
  },
  [types.ANSWER_QUIZ] (state, {result}) {
    state.results[state.currentLevel].push(result)
  },
}

const actions = {
  [types.FETCH_QUIZ] (context, {level}) {
    API.getQuiz(level)
      .then(quiz => {
        context.commit(types.RECEIVE_QUIZ, {level, quiz})
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
