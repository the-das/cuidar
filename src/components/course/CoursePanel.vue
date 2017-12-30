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
          <p class="level-item"><strong>0/10</strong></p>
        </div>
      </nav>
      <progress class="progress is-primary" value="" max="100"></progress>
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
          <p class="level-item"><strong>0/10</strong></p>
        </div>
      </nav>
      <progress class="progress is-primary" value="" max="100"></progress>
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
      <progress class="progress is-primary" value="" max="100"></progress>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
