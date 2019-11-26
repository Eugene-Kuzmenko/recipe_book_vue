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
    <div>
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
            id: item.id,
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
    display: flex;
  }

  .name {

  }
</style>