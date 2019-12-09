<template lang="pug">
  ListPanel(
    :list="recipes"
    @dragstart="dragStart"
    @fetch="getItemList"
    @remove="removeItem"
    @add="addItem"
    @update="changeItem"
  ) Recipe
</template>

<script>
  import ListPanel from '../components/ListPanel';
  import { RECIPE_REMOVE, RECIPE_ADD, RECIPE_LIST_GET, RECIPE_CHANGE } from '../store/mutationTypes';

  import { mapState, mapActions } from 'vuex';

  export default {
    name:"ItemPanel",
    components: { ListPanel },
    computed: {
      ...mapState({
        recipes: state => state.recipe.list,
      })
    },
    methods: {
      dragStart(id, event) {
        event.dataTransfer.setData('application/json', JSON.stringify({
          type: 'recipe', id
        }))
      },
      ...mapActions({
        removeItem(dispatch, id) {
          dispatch(RECIPE_REMOVE.type, id);
        },
        addItem(dispatch, data) {
          dispatch(RECIPE_ADD.type, data);
        },
        getItemList(dispatch, name) {
          dispatch(RECIPE_LIST_GET.type, { name })
        },
        changeItem(dispatch, id, data) {
          dispatch(RECIPE_CHANGE.type, { id, ...data })
        }
      })
    }
  }
</script>