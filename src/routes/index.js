import VueRouter from 'vue-router';

import Chain from './Chain';
import Recipes from './Recipes';

export default new VueRouter({
  mode: "history",
  routes: [
    { path: '/recipes', component: Recipes },
    { path: '/chain', component: Chain },
  ]
});
