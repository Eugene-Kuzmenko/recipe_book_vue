<template>
  <div id="app">
    <nav class="nav">
      <router-link
        class="nav-btn"
        tag="button"
        to="/recipes"
      >
        Recipes
      </router-link>
      <router-link
        class="nav-btn"
        tag="button"
        to="/chain"
      >
        Chain
      </router-link>
    </nav>
  </div>
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
  }
</style>

<style scoped>
  #app {

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
