<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <quiz-process
              v-if="quizCollection"
              v-bind:quizCollection="quizCollection"></quiz-process>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <template v-if="quizResult && quizResult.length == 0">
              <quiz-starting
                v-on:nextQuiz="nextQuiz"></quiz-starting>
            </template>
            <template v-else-if="quizResult && quizResult.length < 10">
              <quiz-question
                v-on:answerQuiz="answerQuiz"
                v-on:nextQuiz="nextQuiz"></quiz-question>
            </template>
            <template v-else>
              <quiz-result></quiz-result>
            </template>
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
    ...mapState([
      'currentIndex',
    ]),
    ...mapGetters({
      quizCollection: 'currentQuizCollection',
      quizResult: 'currentQuizResult',
    }),
  },

  methods: {
    ...mapMutations({
      'selectLevel': types.SELECT_LEVEL,
      'nextQuiz': types.NEXT_QUIZ,
      'answerQuiz': types.ANSWER_QUIZ,
    }),
    ...mapActions({
      'fetchQuiz': types.FETCH_QUIZ,
    }),
  },

  mounted() {
    const level = this.$route.params.level
    this.selectLevel({ level })
    if (!this.currentQuizSet) {
      this.fetchQuiz({ level })
    }
  },
}
</script>

<style>

</style>
