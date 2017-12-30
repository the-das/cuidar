<template>
  <div class="box">
    <h1 class="title">{{ quizCollection.title }}</h1>
    <h2 class="subtitle">{{ quizCollection.subject }}: 예상시간 {{ quizCollection.time }}</h2>
    <progress class="progress is-primary"
      v-bind:value="quizResult.length" 
      v-bind:max="quizCollection.content.length"></progress>
  </div>
</template>

<script>
export default {
  props: [
    'quizCollection',
    'quizResult',
  ],
}
</script>

<style>

</style>
