<template>
  <div class="box">
    <!-- Question -->
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">문제 {{index + 1}}</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input is-static" type="text" v-bind:value="quiz.question" readonly>
          </p>
        </div>
      </div>
    </div>
    <template v-if="quiz.text">
      <!-- Text -->
      <div class="field is-horizontal">
        <div class="field-label is-normal"></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea class="textarea" type="text" readonly v-model="quiz.text"></textarea>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- Example -->
    <div class="field is-horizontal">
      <div class="field-label is-normal"></div>
      <div class="field-body">
        <div class="field">
          <div class="control" v-for="(el, index) in quiz.example" v-bind:key="index">
            <label class="radio">
              <input type="radio" name="question-example"
                v-bind:value="index + 1"
                v-model="selected"
                v-bind:disabled="result">
              {{ el }}
            </label>
          </div>
        </div>
      </div>
    </div>
    <template v-if="!result">
      <!-- Check Result -->
      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-primary"
                v-bind:disabled="!selected"
                v-on:click="checkReply">
                정답 확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <!-- Question -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">해설</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input is-static" type="text" v-bind:value="quiz.explanation" readonly>
            </p>
          </div>
        </div>
      </div>
      <!-- Check Result -->
      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <span class="tag is-rounded is-medium">{{ result == 'OK' ? '정답' : '틀림' }}</span>
              <button class="button is-primary"
                v-on:click="nextQuiz">
                다음 문제 &nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: [
    'index',
    'quiz',
  ],

  data() {
    return {
      selected: undefined,
      result: undefined,
    }
  },

  methods: {
    checkReply() {
      const result = this.quiz.answer == this.selected ? 'OK' : 'NO'
      this.result = result
      this.$emit('answerQuiz', {result})
    },
    nextQuiz() {
      this.selected = undefined
      this.result = undefined
      this.$emit('nextQuiz')
    },
  },
}
</script>

<style>

</style>
