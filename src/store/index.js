import Vue from "vue";
import Vuex from "vuex";
import postList from './modules/posts';

Vue.use(Vuex)
Vue.config.devtools = true

const store = new Vuex.Store({
  modules: {
    postList
  },
});

export default store;
