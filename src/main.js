import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import Config from './model/config.js';
Vue.prototype.$config = Config;

import Axios from "axios";
Axios.defaults.baseURL = Config.api;
Vue.prototype.$axios = Axios;


import './assets/iconfont/iconfont.css';

import Storage from './model/storage.js';
Vue.prototype.$storage = Storage;

//获取url传过来的桌号
// console.log(window.location);
let roomid = window.location.hash.split('=')[1] || 'a010';
Storage.set('roomid', roomid);
// console.log(roomid);

//vue-socket.io
// import VueSocketio from 'vue-socket.io';
// Vue.use(VueSocketio, 'http://a.itying.com?roomid='+ roomid);



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // sockets: {  /*测试期间写 也可不写在根里面*/
  //   connect: function(){
  //     console.log('socket connected')
  //   }
  // },
  render: h => h(App)
}).$mount("#app");
