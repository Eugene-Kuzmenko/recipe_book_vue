<template>
  <div class="container">
    <input
      v:model="search"
      class="input"
      type="text"
    />
    <ul
      class="list"
    >
      <button
        class="add"
        v-on:click="addItem"
      >
        Add {{ search }}
      </button>
      <Item
        v-for="item in items"
        :key="item.id"
        :item="item"
        v-on:removeItem="removeItem"
      ></Item>
    </ul>
  </div>
</template>

<script>
  import Item from '../components/Item';
  import { ITEM_REMOVE, ITEM_ADD, ITEM_LIST_GET } from '../store/mutationTypes';

  import { mapState, mapActions } from 'vuex';

  export default {
    name:"ItemPanel",
    component: { Item },
    data() {
      return {
        search: '',
      }
    },
    onMount() {
      this.getItemList();
    },
    computed: {
      ...mapState({
        items: state => state.item.list,
      })
    },
    methods: {
      ...mapActions({
        removeItem(dispatch, id) {
          dispatch(ITEM_REMOVE, id);
        },
        addItem(dispatch) {
          dispatch(ITEM_ADD, {
            name: this.$data.search,
          });
        },
        getItemList(dispatch) {
          dispatch(ITEM_LIST_GET, {
            name: this.$data.search,
          })
        }
      })
    }
  }
</script>

<style scoped>
  .container {

  }

  .list {

  }

  .input {

  }

  .add {

  }
</style>
