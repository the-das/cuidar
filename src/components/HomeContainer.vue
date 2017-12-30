<template>
  <div>
    <hero v-if="meta" :meta="meta"></hero>
    <level></level>
    <quiz v-if="meta" :meta="meta"></quiz>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Hero from './home/Hero.vue'
import Level from './home/Level.vue'
import Quiz from './home/Quiz.vue'
import * as types from 'store/types'

export default {
  components: {
    Hero,
    Level,
    Quiz,
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

  mounted() {
    if (!this.meta) {
      this.fetchMeta()
    }
  },
}
</script>

<style>

</style>
