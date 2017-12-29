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
            <quiz-question v-on:answerQuiz="answerQuiz"></quiz-question>
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
      'currentQuiz': state => state.quiz.content[state.quiz.currentLevel]
    }),
    ...mapGetters([
      'currentList'
    ]),
  },

  methods: {
    ...mapMutations({
      'selectLevel': types.SELECT_LEVEL,
      'answerQuiz': types.ANSWER_QUIZ,
    }),
    ...mapActions({
      'fetchQuiz': types.FETCH_QUIZ,
    }),
  },

  created() {
    const level = this.$route.params.level
    this.selectLevel({level})
    if (!this.currentQuiz) {
      this.fetchQuiz({level})
    }
  },
}
</script>

<style>

</style>
