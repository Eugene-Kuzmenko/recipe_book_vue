import {
  ITEM_ADD,
  ITEM_CHANGE,
  ITEM_LIST_GET,
  ITEM_REMOVE,
} from './mutationTypes';
im

export default {
  state: {
    list: [],
  },
  mutations: {
    [ITEM_LIST_GET.SUCCESS](state, { list }) {
      state.items = list;
    },
    [ITEM_ADD.SUCCESS](state, { item }) {
      const i = state.list.findIndex(oldItem => oldItem.id === item.id);
      if (i > 0) state.list[i] = item;
      else state.list.push(item);
    }
  }
}