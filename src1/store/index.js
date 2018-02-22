import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';

import state from './state';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);




export default new Vuex.Store({
  state,
  mutations,
  getters,
  plugins: [
    logger()
  ],
  strict: true //严格模式，只能通过mutation来处理state
});
