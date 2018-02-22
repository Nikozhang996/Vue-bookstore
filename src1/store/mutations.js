import * as Types from './mutations-types';


const mutations = {
  /*state为默认参数，val为传入的参数*/
  [Types.INCREMENT] (state, val) {
    state.count += val;
  },
  [Types.DECREMENT] (state, val) {
    state.count -= val;
  }
};

export default mutations;
