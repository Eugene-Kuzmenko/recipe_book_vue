<template>
  <li class="container">
    <div
      class="count"
      v-if="count"
    >
      {{ count }}
    </div>
    <input
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
      v-on:click="$emit('remove', item.id)"
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
        this.$data.newName = this.$props.name;
        this.$data.isEditing = true;
      },
      ...mapActions({
        saveName(dispatch) {
          dispatch(ITEM_CHANGE, {
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
  .container {
    width: 100%;
    display: flex;
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

  .name {

  }
</style>