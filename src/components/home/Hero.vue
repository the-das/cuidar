<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ meta.title }}
        </h1>
        <h2 class="subtitle">
          {{ meta.description }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'meta',
  ],
}
</script>

<style>

</style>
