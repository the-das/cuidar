<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <quiz-process></quiz-process>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <quiz-starting></quiz-starting>
            <quiz-question></quiz-question>
            <quiz-result></quiz-result>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import QuizProcess from './quiz/QuizProcess.vue'
import QuizStarting from './quiz/QuizStarting.vue'
import QuizQuestion from './quiz/QuizQuestion.vue'
import QuizResult from './quiz/QuizResult.vue'
import * as types from 'store/types'

export default {

  components : {
    QuizProcess,
    QuizStarting,
    QuizQuestion,
    QuizResult,
  },

  computed: {
    ...mapState({
      quiz: 'currentQuiz',
    }),
  },

  methods: {
    fetchQuiz() {
      const level = this.$route.params.level

      this.$store.commit({
        type: types.SELECT_LEVEL,
        level
      })

      if (!this.quiz) {
        this.$store.dispatch({
          type: types.FETCH_QUIZ,
          level
        })
      }
    },
    answerQuiz(anwserResult) {
      this.$store.commit({
        type: types.ANSWER_QUIZ,
        anwserResult
      })
    },
  },

  created() {
    this.fetchQuiz()
  },
}
</script>

<style>

</style>
