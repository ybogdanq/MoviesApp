import Vue from "vue";
import router from "./plugins/vuerouter/router";
import App from "./App.vue";
import store from "./store";
import "./plugins/bootstrap";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
