<template>
  <div class="box">
    <h1 class="title">{{ quizCollection.title }}</h1>
    <h2 class="subtitle">{{ quizCollection.subject }}: 예상시간 {{ quizCollection.time }}</h2>
    <progress class="progress is-primary" value="15" max="100">30%</progress>
  </div>
</template>

<script>
export default {
  props: [
    'quizCollection',
  ],
}
</script>

<style>

</style>
