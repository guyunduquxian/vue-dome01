import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

let api = 'http://a.itying.com/';

import Axios from "axios";
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = api;

Vue.prototype.$api = api;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
