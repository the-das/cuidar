<template>
  <div class="box">
    <!-- Question -->
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">문제 1</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input is-static" type="text" v-bind:value="question.question" readonly>
          </p>
        </div>
      </div>
    </div>
    <template v-if="question.text">
      <!-- Text -->
      <div class="field is-horizontal">
        <div class="field-label is-normal"></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea class="textarea" type="text" readonly v-model="question.text"></textarea>
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
          <div class="control" v-for="(el, index) in question.example" v-bind:key="index">
            <label class="radio">
              <input type="radio" name="question-example" v-bind:value="index + 1" v-model="selected" v-bind:disabled="question.reply">
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
              <input class="input is-static" type="text" v-bind:value="question.explanation" readonly>
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
              <span class="tag is-rounded is-medium">{{ result ? '정답' : '틀림' }}</span>
              <button class="button is-primary">
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

  data() {
    return {
      selected: undefined,
      result: undefined,
      question: {
        "question": "Vue + Vuex = ?",
        "text": "1 + 1 = 2,\n1 + 2 = ?,\n1 + 3 = 4",
        "example": [
          "React",
          "Polymer",
          "Angular",
          "Vue"
        ],
        "answer": "4",
        "explanation": "Vue + Vuex = Vue",
      },
    }
  },

  methods: {
    checkReply() {
      const result = this.question.answer == this.selected ? 'OK' : 'NO'
      this.result = result
      this.$emit('answerQuiz', {result})
    },
  },
}
</script>

<style>

</style>
