import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import router from './routes';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
