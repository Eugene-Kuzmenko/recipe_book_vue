<template lang="pug">
  section.container
    .name(
      @drop="dropRecipe"
      @dragover.prevent="dragOverRecipe"
      :class="{dragover:recipeHover}"
    ) {{name}}
    .content
      .items-container In
        ul.items.in
          item(
            v-for="item in ingredients"
            :key="item.item_id"
            :name="item.item_name"
            :count="item.amount"
            @remove="removeItem(item.id)"
            @update="changeItem(item.item_id, $event)"
          )
      .items-container Out
        ul.items.out
          item(
            v-for="item in products"
            :key="item.item_id"
            :name="item.item_name"
            :count="item.amount"
            @remove="removeItem(item.id)"
            @update="changeItem(item.item_id, $event)"
          )
</template>

<script>
import { ListPanelItem } from '.';
import { mapState, mapActions } from 'vuex';

import { RECIPE_ITEM_ADD, RECIPE_ITEM_REMOVE, ITEM_CHANGE, RECIPE_SELECT } from '../store/mutationTypes';

function filterItems(selected, isResult=false) {
  return (selected
    ? selected.items.filter(
      e => e.is_result === isResult
    )
    : []
  )
}

export default {
  components: {
    item: ListPanelItem
  },
  data() {
    return {
      recipeHover: false,
      ingredientHover: false,
      productHover: false,
    }
  },
  computed: {
    ...mapState({
      recipeId(state) {
        if (state.recipe.selected) return state.recipe.selected.id;
        return null;
      },
      name(state) {
        if (state.recipe.selected) return state.recipe.selected.name;
        return 'Not Selected';
      },
      ingredients(state) {
        return filterItems(state.recipe.selected)
      },
      products(state) {
        return filterItems(state.recipe.selected, true)
      }
    })
  },
  methods: {
    dragOverRecipe() {
      this.recipeHover = true;
      return false;
    },
    dragLeaveRecipe() {
      this.recipeHover = false;
      return false;
    },
    ...mapActions({
      addItem(dispatch, data) {
        dispatch(RECIPE_ITEM_ADD.type, data)
      },
      removeItem(dispatch, id) {
        dispatch(RECIPE_ITEM_REMOVE.type, id)
      },
      changeItem(dispatch, id, data) {
        dispatch(ITEM_CHANGE.type, { id, ...data })
      },
      dropRecipe(dispatch, event) {
        const rawData = event.dataTransfer.getData('application/json');

        const data = JSON.parse(rawData);
        if (data.type === 'recipe') {
          dispatch(RECIPE_SELECT.type, data.id)
        }
        this.recipeHover = false;
      }
    })
  }
}
</script>

<style scoped>
.container {
  min-height: 400px;
  flex: 1;
  margin: 10px;
  border: 2px solid #6c6c6c;
  display: flex;
  flex-direction: column;
}

.dragover {
  background: #6c6c6c62;
}

.content {
  display: flex;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
}

.name {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-weight: bold;
}

.items-container {
  padding: 5px;
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.items {
  flex: 1;
  width: 100%;
  display: block;
  overflow-y: scroll;
  border: 2px solid #6c6c6c;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-color: #1f1f1f transparent; /*css-lint-ignore */
}

</style>