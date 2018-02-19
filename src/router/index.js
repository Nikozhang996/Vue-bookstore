import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
/*
import Home from '../components/Home';
import List from '../components/List';
import Detail from '../components/Detail';
import Add from '../components/Add';
import Collect from '../components/Collect';
*/


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
        keepalive: true
      }
    },
    {
      name: 'List',
      path: '/List',
      component: () => import('../components/List.vue')
    },
    {
      name: 'add',
      path: '/add',
      component: () => import('../components/Add.vue')
    },
    {
      name: 'collect',
      path: '/collect',
      component: () => import('../components/Collect.vue')
    },
    {
      name: 'detail',
      path: '/detail/:curId',
      component: () => import('../components/Detail.vue')
    },
  ]
});
