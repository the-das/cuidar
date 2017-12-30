<template>
  <div class="box">
    <div class="hero-body has-text-centered">
      <h1 class="title">결과: 총 {{quizResult.length}}문제</h1>
      <h2 class="subtitle">맞음: {{status.okNumber}}</h2>
      <h2 class="subtitle">틀림: {{status.noNumber}}</h2>
      <router-link class="button is-primary" to="/quiz">
        돌아가기 &nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'quizResult',
  ],

  computed: {
    status() {
      let okNumber = 0;
      let noNumber = 0;
      this.quizResult.forEach(el => {
        el == 'OK' ? okNumber++ : noNumber++
      });
      return {
        okNumber,
        noNumber,
      }
    }
  }
}
</script>

<style>

</style>
