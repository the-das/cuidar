<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <h2 class="navbar-item">The DaS</h2>
      </div>
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/quiz">Quiz</router-link>
          <router-link class="navbar-item" to="/video">Video</router-link>
          <router-link class="navbar-item" to="/about">About</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
