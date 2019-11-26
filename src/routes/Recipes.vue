<template>
  <div class="page">
    <ItemPanel></ItemPanel>
  </div>
</template>

<script>
  import { ItemPanel } from '../components';

  export default {
    components: { ItemPanel },
    name: "Recipes",
  }
</script>

<style scoped>
  .page {
    display: flex;
  }

</style>