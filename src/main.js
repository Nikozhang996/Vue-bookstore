import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3465220055,1810645977&fm=27&gp=0.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519030442714&di=d4783e05dfdbadbd4ec2c82bc0db1287&imgtype=0&src=http%3A%2F%2Fwww.carmenor.com%2Fqqwebhimgs%2Fuploads%2Fbd4064715.jpg',
  attempt: 1
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
