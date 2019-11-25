import Vuex from 'Vuex';

import item from './item';
import recipe from './recipe';

const store = new Vuex.Store({
  modules: {
    recipe,
    item,
  },
});