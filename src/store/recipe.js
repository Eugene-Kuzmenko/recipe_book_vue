import {
  RECIPE_ADD,
  RECIPE_CHANGE,
  RECIPE_LIST_GET,
  RECIPE_REMOVE,
  RECIPE_ITEM_ADD,
  RECIPE_ITEM_REMOVE,
  RECIPE_SELECT,
  ITEM_CHANGE,
  ITEM_REMOVE,
} from './mutationTypes';

import api from '../api';
import { doForId, updateListEntry } from '../utils';

export default {
  state: {
    list: [],
    selected: null,
  },
  mutations: {
    [RECIPE_LIST_GET.SUCCESS](state, list) {
      state.list = list;
    },
    [RECIPE_ADD.SUCCESS](state, recipe) {
      state.list.push(recipe);
    },
    [RECIPE_REMOVE.SUCCESS](state, id) {
      doForId(state.list, id, i => {
        state.list.splice(i, 1);
      })
      if (state.selected && state.selected.id == id) {
        state.selected = null
      }
    },
    [RECIPE_CHANGE.SUCCESS](state, recipe) {
      updateListEntry(state.list, recipe)
      if (state.selected && state.selected.id == recipe.id) {
        state.selected = recipe;
      }
    },
    [RECIPE_SELECT.SUCCESS](state, id) {
      doForId(state.list, id, i => {
        state.selected = state.list[i]; 
      });
    },
    [RECIPE_ITEM_ADD.SUCCESS](state, { recipe_id, ...recipeItem }) {
      if (state.selected && state.selected.id == recipe_id) {
        state.selected.items.push(recipeItem);
      }
    },
    [RECIPE_ITEM_REMOVE.SUCCESS](state, id) {
      console.log('remove', id) //eslint-disable-line
      if (state.selected) {
        doForId(state.selected.items, id, i => {
          console.log('remove', id, i) //eslint-disable-line
          state.selected.items.splice(i, 1);
        });
      }
    },
    [ITEM_REMOVE.SUCCESS](state, id) {
      if (state.selected) {
        doForId(state.selected.items, id, i => {
          state.selected.items.splice(i, 1);
        }, 'item_id');
      }
    },
    [ITEM_CHANGE.SUCCESS](state, { id, name}) {
      if (state.selected) {
        doForId(state.selected.items, id, i => {
          if (name) state.selected.items[i].item_name=name;
        }, 'item_id');
      }
    }
  },
  actions: {
    async [RECIPE_LIST_GET](context, params) {
      try {
        const { data } = await api.get('recipes/', {
          params
        });
        context.commit(RECIPE_LIST_GET.SUCCESS, data);
      } catch (error) {
        context.commit(RECIPE_LIST_GET.FAILURE, error);
      }
    },
    async [RECIPE_CHANGE](context, recipe) {
      try {
        const { data } = await api.patch(`recipes/${recipe.id}/`, recipe);
        context.commit(RECIPE_CHANGE.SUCCESS, data);
      } catch (error) {
        context.commit(RECIPE_CHANGE.FAILURE, error);
      }
    },
    async [RECIPE_ADD](context, payload) {
      try {
        const { data } = await api.post('recipes/', payload);
        context.commit(RECIPE_ADD.SUCCESS, data);
      } catch (error) {
        context.commit(RECIPE_ADD.FAILURE, error);
      }
    },
    async [RECIPE_REMOVE](context, id) {
      try {
        await api.delete(`recipes/${id}/`,);
        context.commit(RECIPE_REMOVE.SUCCESS, id);
      } catch (error) {
        context.commit(RECIPE_REMOVE.FAILURE, error);
      }
    },
    async [RECIPE_ITEM_ADD](context, payload) {
      try {
        const { data } = await api.post('recipe-items/', payload);
        context.commit(RECIPE_ITEM_ADD.SUCCESS, data);
      } catch (error) {
        context.commit(RECIPE_ITEM_ADD.FAILURE, error);
      }
    },
    async [RECIPE_ITEM_REMOVE](context, id) {
      try {
        await api.delete(`recipe-items/${id}/`,);
        context.commit(RECIPE_ITEM_REMOVE.SUCCESS, id);
      } catch (error) {
        context.commit(RECIPE_ITEM_REMOVE.FAILURE, error);
      }
    },
    [RECIPE_SELECT](context, id) {
      context.commit(RECIPE_SELECT.SUCCESS, id);
    }
  }
}