import Vue from 'vue';

import doForId from './doForId';

export default (list, item) => (
  item.id == null && doForId(list, item.id, i => {
    Vue.set(list, i, { ...list[i], ...item });
  })
);