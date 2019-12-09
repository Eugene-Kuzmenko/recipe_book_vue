<template>
  <ListPanel
    :list="items"
    @fetch="getItemList"
    @remove="removeItem"
    @add="addItem"
    @update="changeItem"
  >
    Items
  </ListPanel>
</template>

<script>
  import ListPanel from '../components/ListPanel';
  import { ITEM_REMOVE, ITEM_ADD, ITEM_LIST_GET, ITEM_CHANGE } from '../store/mutationTypes';

  import { mapState, mapActions } from 'vuex';

  export default {
    name:"ItemPanel",
    components: { ListPanel },
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
        addItem(dispatch, data) {
          dispatch(ITEM_ADD.type, data);
        },
        getItemList(dispatch, name) {
          dispatch(ITEM_LIST_GET.type, { name })
        },
        changeItem(dispatch, id, data) {
          dispatch(ITEM_CHANGE.type, { id, ...data })
        }
      })
    }
  }
</script>
