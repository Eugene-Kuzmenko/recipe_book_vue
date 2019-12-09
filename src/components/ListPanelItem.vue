<template lang="pug">
  li.item(
    :draggable="!isEditing"
    @dragstart="$emit('dragstart', $event)"
  )
    .count(v-if="count") {{ count }}
    input.input(
      v-if="isEditing"
      type="text"
      v-model="newName"
      @keypress.enter="saveName"
      @blur="isEditing = false"
    )
    .name(
      v-else
      @dblclick="startEditingName"
    ) {{ name }}
    button.remove(@click.stop.prevent="$emit('remove')") X
</template>

<script>
  export default {
    name: 'ListPanelItem',
    props: ['name', 'count'],

    data() {
      return {
        isEditing: false,
        newName: '',
      }
    },

    methods: {
      startEditingName() {
        this.$data.newName = this.name;
        this.$data.isEditing = true;
      },
      saveName() {
        this.$emit('update', { name: this.newName });
        this.isEditing = false;
      }
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
    font-size: 0.875rem; 
    min-height: 35px;

    height: min-content;
  }

  .item:active {
    background-color: #656d6b54;
  }

  .input {
    background:  #1f1f1f;
    border: 2px solid #6c6c6c;
    width: 100%;
    padding: 7px;
    font-size: 0.875rem;  
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