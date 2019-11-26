import {
  ITEM_ADD,
  ITEM_CHANGE,
  ITEM_LIST_GET,
  ITEM_REMOVE,
} from './mutationTypes';

import api from '../api';
import { doForId, updateListEntry } from '../utils';

export default {
  state: {
    list: [],
  },
  mutations: {
    [ITEM_LIST_GET.SUCCESS](state, list) {
      state.list = list;
    },
    [ITEM_ADD.SUCCESS](state, { item }) {
      state.list.push(item);
    },

    [ITEM_REMOVE.SUCCESS](state, id) {
      doForId(state.list, id, i => {
        state.list.splice(i, 1);
      })
    },
    [ITEM_CHANGE.SUCCESS](state, item) {
      updateListEntry(state.list, item)
    }
  },
  actions: {
    async [ITEM_LIST_GET](context) {
      try {
        const { data } = await api.get('items/');
        context.commit(ITEM_LIST_GET.SUCCESS, data);
      } catch (error) {
        context.commit(ITEM_LIST_GET.FAILURE, error);
      }
    },
    async [ITEM_ADD](context, payload) {
      try {
        await api.post('items/', payload);
        context.commit(ITEM_ADD.SUCCESS, payload);
      } catch (error) {
        context.commit(ITEM_ADD.FAILURE, error);
      }
    },
    async [ITEM_CHANGE](context, item) {
      try {
        await api.patch(`items/${item.id}/`, item);
        context.commit(ITEM_CHANGE.SUCCESS, item);
      } catch (error) {
        context.commit(ITEM_CHANGE.FAILURE, error);
      }
    },
    async [ITEM_REMOVE](context, id) {
      try {
        await api.patch(`items/${id}/`,);
        context.commit(ITEM_REMOVE.SUCCESS, id);
      } catch (error) {
        context.commit(ITEM_REMOVE.FAILURE, error);
      }
    },
  }
}