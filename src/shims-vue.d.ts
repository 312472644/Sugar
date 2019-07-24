declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
// 扩充
declare module 'vue/types/vue' {
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import { Route } from 'vue-router';
  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}
