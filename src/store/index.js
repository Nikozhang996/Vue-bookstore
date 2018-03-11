import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';

Vue.use(Vuex);

import state from './state';
import getters from './getters';
import mutations from './mutations';

export default new Vuex.Store({
  state,
  mutations,
  getters,
  strict: true,
  plugins: [logger()]
});
