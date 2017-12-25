<template>
  <div class="container">
    <template v-for="(el, index) in meta.course">
      <router-link class="button" :to="`/quiz/${el.level}`" :key="index">{{ el.title }}</router-link>
    </template>
  </div>
</template>

<script>
export default {
  props: [
    'meta'
  ],
}
</script>

<style>

</style>
