import Vue from 'vue';
import Vuex from 'vuex';

import item from './item';
import recipe from './recipe';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    recipe,
    item,
  },
});