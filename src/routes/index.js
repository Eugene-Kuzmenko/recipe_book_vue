import VueRouter from 'vue-router';

import Chain from './Chain';
import Recipes from './Recipes';

export default new VueRouter({
  routes: [
    { path: '/recipes', component: Recipes },
    { path: '/recipes', component: Chain },
  ]
});
