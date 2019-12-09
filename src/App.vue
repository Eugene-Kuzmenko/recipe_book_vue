<template lang="pug">
  .app
    nav.nav
      router-link.nav-btn(tag="button" to="recipes") Recipes
      router-link.nav-btn(tag="button" to="chain") Chain
    router-view
</template>

<script>
  export default {
    name: 'app',
    components: {}
  }
</script>

<style>
  body {
    background-color: #2e2e2e;
    color: #dbdbdb;
    font-size: 16px;
    padding: 0;
    margin: 0;
    font-family: arial;
  }
</style>

<style scoped>
  #app {
    min-height: 100vh;
  }
  .nav {
    justify-content: center;
    display: flex;
    height: 50px;
    background-color: #474747;
  }
  .nav-btn {
    height: 100%;
    display: block;
    box-sizing: border-box;
    border: 2px solid #6c6c6c;
    background-color: transparent;
    color: inherit;
    font-size: 1rem;
    padding: 0 20px;

  }
  .nav-btn:focus {
    outline: none;
    border-color: #788787
  }
  .nav-btn:active {
    outline: none;
      background-color: rgba(111,148,148,0.25);
    border-color: #788787
  }
</style>
