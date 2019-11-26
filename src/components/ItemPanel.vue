<template>
  <div class="container">
    <input
      v-model="search"
      class="input"
      type="text"
      v-on:keypress.enter="getItemList"
    />
    <div class=list-container>
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
          v-bind:key="item.id"
          v-bind:item="item"
          v-on:removeItem="removeItem"
        ></Item>
      </ul>
    </div>
  </div>
</template>

<script>
  import Item from '../components/Item';
  import { ITEM_REMOVE, ITEM_ADD, ITEM_LIST_GET } from '../store/mutationTypes';

  import { mapState, mapActions } from 'vuex';

  export default {
    name:"ItemPanel",
    components: { Item },
    data() {
      return {
        search: '',
      }
    },
    mounted() {
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
          dispatch(ITEM_REMOVE.type, id);
        },
        addItem(dispatch) {
          dispatch(ITEM_ADD.type, {
            name: this.$data.search,
          });
        },
        getItemList(dispatch) {
          dispatch(ITEM_LIST_GET.type, {
            name: this.$data.search,
          })
        }
      })
    }
  }
</script>

<style scoped>
  .container {
    width: 25%;
    padding: 0;
    margin: 0;
  }

  .list-container {
    padding: 5px;
    height: 500px;
    box-sizing: border-box;
  }

  .list {
    width: 100%;
    height: 100%;
    display: block;
    overflow-y: scroll;
    border: 2px solid #6c6c6c;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-color: #1f1f1f transparent; /*css-lint-ignore */
  }

  .input {
    background:  #1f1f1f;
    border: 2px solid #6c6c6c;
    width: 100%;
    padding: 7px;
    font-size: 0.9rem;  
    font-weight: 500;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.568);
  }

  .input:focus {
    outline: none;
    border-color: #788787
  }

  .add {
    width: 100%;
    display: block;
    background: transparent;
    color: inherit;
    border: none;
    border-bottom: 1px solid #5A5A5A;
    margin: 0;
    font-size: 1rem;
    height: 35px;
  }

  .add:active {
    background-color: #656d6b54;
  }
</style>
