<template lang="pug">
  .page
    ItemPanel
    Recipe
    RecipePanel
</template>

<script>
  import { ItemPanel, RecipePanel, Recipe } from '../components';

  export default {
    components: { ItemPanel, RecipePanel, Recipe },
    name: "Recipes",
  }
</script>

<style scoped>
  .page {
    display: flex;
    justify-content: space-between;
  }

</style>