import Vue from 'vue';
import store from './store'

import App from './App';

new Vue({
  el: '#app',
  render: h => h(App),
  store //store被注册到了实例上，热闹的人组件都会有this.$store属性，和路由的$router类似
});
