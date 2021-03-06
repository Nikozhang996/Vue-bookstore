import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

/* vue版Swiper插件 */
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

/* 图片赖加载插件 */
import VueLazyload from 'vue-lazyload';

Vue.use(VueAwesomeSwiper);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3465220055,1810645977&fm=27&gp=0.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519030442714&di=d4783e05dfdbadbd4ec2c82bc0db1287&imgtype=0&src=http%3A%2F%2Fwww.carmenor.com%2Fqqwebhimgs%2Fuploads%2Fbd4064715.jpg',
  attempt: 1
});

/* 在进入路由之前，每一次都会执行此方法,全局钩子函数 */
router.beforeEach(function (to, from, next) {
  document.title = to.meta.title;
  next();
});

/* 全局定义过滤器 */
Vue.filter('formatMoney', function (number, places, symbol, thousand, decimal) {
  number = number || 0;
  places = !isNaN(places = Math.abs(places)) ? places : 2;
  symbol = symbol !== undefined ? symbol : "$";
  thousand = thousand || ",";
  decimal = decimal || ".";
  var negative = number < 0 ? "-" : "",
    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
  return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
