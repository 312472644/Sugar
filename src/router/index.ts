import Router from 'vue-router';
import Test from '../components/Test.vue';

const router = new Router({
    routes: [{
        path: '/test',
        name: 'test',
        component: Test,
    }],
});

export default router;
