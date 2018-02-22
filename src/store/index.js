import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';

Vue.use(Vuex);

const state = {cartList: []};

import mutations from './mutations';
import getters from './getters';

export default new Vuex.Store({
  state,
  mutations,
  getters,
  strict: true,
  plugins: [logger()]
});
