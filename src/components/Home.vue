<template>
  <div>
    <hero :meta="meta"></hero>
    <level></level>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Hero from './home/Hero.vue'
import Level from './home/Level.vue'
import * as types from 'store/types'

export default {
  components: {
    Hero,
    Level,
  },

  computed: {
    ...mapState({
      meta: state => state.meta.content,
    }),
  },

  methods: {
    ...mapActions({
      fetchMeta: types.FETCH_META,
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
