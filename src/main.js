import Vue from "vue";
import App from "./App.vue";
// 如果要使用log插件中的file()，则需前置
import "./plugins";
import router from "./router";
import store from "./store";

import "./permission";
import "./styles/global.less";

import { init } from "./utils/init";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created: init(),
  render: h => h(App)
}).$mount("#app");
