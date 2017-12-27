<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <process></process>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <question></question>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Process from './quiz/Process.vue'
import Question from './quiz/Question.vue'
import * as types from 'store/types'

export default {

  components : {
    Process,
    Question,
  },

  computed: {
    ...mapState({
      quiz: state => state.quiz.content,
    }),
  },

  methods: {
    fetchQuiz() {
      const level = this.$route.params.level

      this.$store.commit({
        type: types.SELECT_LEVEL,
        level
      })

      if (!this.quiz[level]) {
        this.$store.dispatch({
          type: types.FETCH_QUIZ,
          level
        })
      }
    },
    nextQuestion() {
      
    },
  },

  created() {
    this.fetchQuiz()
  },
}
</script>

<style>

</style>
