<template>
  <div class="container">
    <header class="header">
      <slot></slot>
    </header>
    <input
      v-model="name"
      class="input"
      type="text"
      @keypress.enter="$emit('fetch', name)"
    />
    <div class=list-container>
      <ul class="list">
        <button
          class="add"
          @click="$emit('add', { name })"
        >
          Add {{ name }}
        </button>
        <item
          v-for="item in list"
          @remove="$emit('remove', item.id)"
          @update="$emit('update', item.id, $event)"
          :key="item.id"
          :name="item.name"
        />
      </ul>
    </div>
  </div>
</template>

<script>
  import ListPanelItem from '../components/ListPanelItem';

  export default {
    name: "ListPanel",
    props: {
      list: Array,
    },
    components: { item: ListPanelItem },
    data() {
      return {
        name: '',
      }
    },
    mounted() {
      this.$emit('fetch');
    },
  }
</script>

<style scoped>
  .header {
    padding: 8px 8px;
    font-weight: bold;
  }

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
