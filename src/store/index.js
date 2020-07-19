import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigadionDrawer: false,
  },
  mutations: {
    toggleNavigationDrawer(state, isDrawerState) {
      console.log(isDrawerState);
      state.navigadionDrawer = isDrawerState;
    },

  },
  actions: {},
  modules: {},
});
