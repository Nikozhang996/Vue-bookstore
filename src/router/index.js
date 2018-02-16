import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import Home from '../components/Home';
import List from '../components/List';
import Detail from '../components/Detail';
import Add from '../components/Add';
import Collect from '../components/Collect';

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
      component: Home
    },
    {
      name: 'List',
      path: '/List',
      component: List
    },
    {
      name: 'add',
      path: '/add',
      component: Add
    },
    {
      name: 'collect',
      path: '/collect',
      component: Collect
    },
    {
      name: 'detail',
      path: '/detail/:curId',
      component: Detail
    },
  ]
});
