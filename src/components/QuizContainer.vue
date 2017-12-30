<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <quiz-process
              v-if="quizCollection"
              v-bind:quizCollection="quizCollection"
              v-bind:quizResult="quizResult"></quiz-process>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <template v-if="quiz">
              <quiz-question
                v-bind:index="index"
                v-bind:quiz="quiz"
                v-on:answerQuiz="answerQuiz"
                v-on:nextQuiz="nextQuiz"></quiz-question>
            </template>
            <template v-if="!quiz && !index">
              <quiz-starting
                v-on:nextQuiz="nextQuiz"></quiz-starting>
            </template>
            <template v-else-if="index == quizCollection.content.length">
              <quiz-result
                v-bind:quizResult="quizResult"></quiz-result>
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
    ...mapState({
      index: state => state.quiz.currentIndex,
    }),
    ...mapGetters({
      quizCollection: 'currentQuizCollection',
      quizResult: 'currentQuizResult',
      quiz: 'currentQuiz',
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
