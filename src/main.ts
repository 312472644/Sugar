import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;
Vue.use(Router);

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app');
