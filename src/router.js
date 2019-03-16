import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Start from "./views/Start.vue";
import Cart from "./views/Cart.vue";
import Cate from "./views/Cate.vue";
import Order from "./views/Order.vue";
import OrderPay from "./views/Order_pay.vue";
import Hot from "./views/Hot.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "start",
      component: Start
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/cate",
      name: "cate",
      component: Cate
    },
    {
      path: "/order",
      name: "order",
      component: Order
    },
    {
      path: "/orderPay",
      name: "orderPay",
      component: OrderPay
    },
    {
      path: "/hot",
      name: "hot",
      component: Hot
    }
  ]
});
