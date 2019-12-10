<template lang="pug">
  section.container
    .name(
      @drop.prevent="dropRecipe"
      @dragover.prevent="dragOver('recipe', 'recipeHover', $event)"
      @dragleave.prevent="recipeHover=false"
      :class="{dragover:recipeHover}"
    ) {{name}}
    .content
      .items-container In
        ul.items.in(
          :class="{dragover:ingredientHover}"
          @dragover.prevent="dragOver('item', 'ingredientHover', $event)"
          @dragleave.prevent="ingredientHover=false"
          @drop.prevent="dropItem($event)"
        )
          item(
            v-for="item in ingredients"
            :key="item.item_id"
            :name="item.item_name"
            :count="item.qty"
            @remove="removeItem(item.id)"
            @update="changeItem(item.item_id, $event)"
          )
      .items-container Out
        ul.items.out(
          :class="{dragover:productHover}"
          @dragover.prevent="dragOver('item', 'productHover', $event)"
          @dragleave.prevent="productHover=false"
          @drop.prevent="dropItem($event, true)"
        )
          item(
            v-for="item in products"
            :key="item.item_id"
            :name="item.item_name"
            :count="item.qty"
            @remove="removeItem(item.id)"
            @update="changeItem(item.item_id, $event)"
          )
</template>

<script>
import { ListPanelItem } from '.';
import { mapState, mapActions } from 'vuex';

import { RECIPE_ITEM_ADD, RECIPE_ITEM_REMOVE, ITEM_CHANGE, RECIPE_SELECT } from '../store/mutationTypes';

const getDragData = event => event.dataTransfer.getData('text/plain').split(',');

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
    dragOver(expectedType, hoverField, event) {
      const [type, ] = getDragData(event)
      if (type === expectedType) {
        this[hoverField] = true;
        return false;
      }
    },
    dragLeave() {
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
        const [type, rawNumber] = getDragData(event);
        if (type === 'recipe') {
          dispatch(RECIPE_SELECT.type, Number(rawNumber))
        }
        this.recipeHover = false;
      },
      dropItem(dispatch, event, is_result = false) {
        const [type, item_id] = getDragData(event);
        if (type === 'item') {
          dispatch(RECIPE_ITEM_ADD.type, {
            recipe_id: this.recipeId,
            qty:1,
            item_id,
            is_result, 
          });
        }
        if (is_result) this.productHover = false;
        else this.ingredientHover = false;
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