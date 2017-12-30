<template>
  <div>
    <div>
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <router-link class="button" to="/quiz/beginner">
              초심자 &nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i>
            </router-link>
          </div>
        </div>
        <div class="level-right">
          <p class="level-item"><strong>10/10</strong></p>
        </div>
      </nav>
      <progress class="progress is-primary" value="100" max="100">100%</progress>
    </div>
    <br>
    <div>
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <router-link class="button" to="/quiz/intermediate">
              중급자 &nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i>
            </router-link>
          </div>
        </div>
        <div class="level-right">
          <p class="level-item"><strong>5/10</strong></p>
        </div>
      </nav>
      <progress class="progress is-primary" value="50" max="100">50%</progress>
    </div>
    <br>
    <div>
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <router-link class="button" to="/quiz/expert">
              고급자 &nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i>
            </router-link>
          </div>
        </div>
        <div class="level-right">
          <p class="level-item"><strong>0/10</strong></p>
        </div>
      </nav>
      <progress class="progress is-primary" value="15" max="100">30%</progress>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
