import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('../components/Home.vue'),
      meta: {
        keepalive: true,
        title: '首页'
      }
    },
    {
      name: 'List',
      path: '/List',
      component: () => import('../components/List.vue'),
      meta: {
        title: '列表'
      }
    },
    {
      name: 'add',
      path: '/add',
      component: () => import('../components/Add.vue'),
      meta: {
        title: '添加'
      }
    },
    {
      name: 'collect',
      path: '/collect',
      component: () => import('../components/Collect.vue'),
      meta: {
        title: '收藏'
      }
    },
    {
      name: 'detail',
      path: '/detail/:curId',
      component: () => import('../components/Detail.vue')
    },
  ]
});
