<template>
  <div class="box">
    <div class="hero-body has-text-centered">
      <button class="button is-primary is-large"
        v-on:click="nextQuiz">
        시작하기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextQuiz() {
      this.$emit('nextQuiz')
    },
  },
}
</script>

<style>

</style>
