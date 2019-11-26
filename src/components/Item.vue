<template>
  <li class="item">
    <div
      class="count"
      v-if="count"
    >
      {{ count }}
    </div>
    <input
      class='input'
      v-if="isEditing"
      type="text"
      v-model="newName"
      v-on:keypress.enter="saveName"
      v-on:blur="isEditing = false"
    />
    <div
      v-else
      v-on:dblclick="startEditingName"
      class="name"
    >
      {{ item.name }}
    </div>
    <button
      class="remove"
      v-on:click.stop.prevent="$emit('removeItem', item.id)"
    >
      X
    </button>
  </li>
</template>

<script>
  import { mapActions } from 'vuex';
  import { ITEM_CHANGE } from '../store/mutationTypes';

  export default {
    name: 'Item',
    props: ['item', 'count'],

    data() {
      return {
        isEditing: false,
        newName: '',
      }
    },

    methods: {
      startEditingName() {
        this.$data.newName = this.$props.item.name;
        this.$data.isEditing = true;
      },
      ...mapActions({
        saveName(dispatch) {
          dispatch(ITEM_CHANGE.type, {
            id: this.$props.item.id,
            name: this.$data.newName,
          });
          this.$data.isEditing = false;
        }
      })
    }
  };
</script>

<style scoped>
  .item {
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    background: transparent;
    color: inherit;
    border: none;
    border-bottom: 1px solid #5A5A5A;
    margin: 0;
    font-size: 1rem;
    height: 35px;
  }

  .item:active {
    background-color: #656d6b54;
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

  .name {
    flex: 1;
    padding: 0 8px; 
  }

  .remove {
    cursor: pointer;
    height: 100%;
    width: 35px;
    font-size: 1.2rem;
    background: transparent;
    border: none;
    color: inherit;
  }

  .remove:active {
    background-color: #656d6b54;
  }
</style>