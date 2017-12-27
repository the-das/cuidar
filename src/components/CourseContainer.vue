<template>
  <section>
    <course-hero></course-hero>
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <course-panel></course-panel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CourseHero from './course/CourseHero.vue'
import CoursePanel from './course/CoursePanel.vue'

export default {

  components: {
    CourseHero,
    CoursePanel,
  },
}
</script>

<style>

</style>
