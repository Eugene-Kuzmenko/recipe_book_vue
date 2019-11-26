<template>
  <div class="page">
    <div class="item-panel">
      <input
        class="item-search input"
        type="text"
      />
      <ul
        class="item-list list"
      >
        <li
          v-for="item in items"
          v-bind:key="item.id"
          v-bind:item="item"
          class="item"
        >
          {{ name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Item } from '../components';

  import { mapState } from 'vuex';

  export default {
    name: "Recipes",
    component: { Item },
    computed: {
      ...mapState({
        items: state => state.item.list,
      })
    }
  }
</script>

<style scoped>
  .page {
    display: flex;
  }

  .item-panel {

  }

  .input {

  }

  .item-search {

  }
</style>