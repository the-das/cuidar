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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import CourseHero from './course/CourseHero.vue'
import CoursePanel from './course/CoursePanel.vue'
import * as types from 'store/types'

export default {
  components: {
    CourseHero,
    CoursePanel,
  },

  computed: {
    ...mapState({
      meta: state => state.meta.content,
    }),
  },

  methods: {
    ...mapActions({
      'fetchMeta': types.FETCH_META,
    }),
  },

  created() {
    if (!this.meta) {
      this.fetchMeta()
    }
  },
}
</script>

<style>

</style>
