import Vue from 'vue';
import App from './App.vue';
import VueRouter, { Route } from 'vue-router';
import router from '@/router';
import store from '@/store';
import axios, { AxiosInstance } from 'axios';
import Vueaxios from 'vue-axios';

// 自定义vue扩展属性
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    axios: AxiosInstance;
  }
}

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vueaxios, axios);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
