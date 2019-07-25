import Router from 'vue-router';
import Login from '../views/Login.vue';
import Index from '../views/Index.vue';
const baseName: string = '/sugar';

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: baseName.concat('/login')
    },
    {
      path: baseName.concat('/login'),
      name: 'login',
      component: Login
    },
    {
      path: baseName.concat('/index'),
      name: 'index',
      component: Index,
      meta: {
        isRequire: true
      }
    },
    {
      path: baseName.concat('/user'),
      name: 'user',
      component: () => import('../views/User.vue'),
      meta: {
        isRequire: true
      }
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   next();
//   const token: boolean = JSON.parse(sessionStorage.getItem('token') as string);
//   // 带标记需要验证
//   if (to.meta.isRequire) {
//     if (token) {
//       next();
//     } else {
//       next('/sugar/login');
//     }
//   } else {
//     next();
//   }
// });

export default router;
