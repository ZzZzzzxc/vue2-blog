import Vue from "vue";
import store from "@/store";
import {
  ACCESS_TOKEN,
  SIDEBAR_OPENED,
  NAVTHEME,
  LAYOUT_MODE,
  FIXED_HEADER,
  AUTO_HIDE_HEADER,
  PRIMARY_COLOR,
  MULTI_TAB,
  COLOR_WEAK
} from "@/store/mutation-type";
import config from "@/configs/app.config.js";

export function init() {
  // Token
  store.commit("setToken", Vue.prototype.$ls.get(ACCESS_TOKEN, ""));
  // app
  store.commit("setTheme", Vue.prototype.$ls.get(NAVTHEME, config.navTheme));
  store.commit("setLayout", Vue.prototype.$ls.get(LAYOUT_MODE, config.layout));
  store.commit(
    "setColor",
    Vue.prototype.$ls.get(PRIMARY_COLOR, config.primaryColor)
  );
  store.commit(
    "setSidebar",
    Vue.prototype.$ls.get(SIDEBAR_OPENED, config.sidebarOpened)
  );
  store.commit(
    "setFixedHeader",
    Vue.prototype.$ls.get(FIXED_HEADER, config.fixedHeader)
  );
  store.commit(
    "setAutoHideHeader",
    Vue.prototype.$ls.get(AUTO_HIDE_HEADER, config.autoHideHeader)
  );
  store.commit("setWeak", Vue.prototype.$ls.get(COLOR_WEAK, config.colorWeak));
  store.commit(
    "setMultiTab",
    Vue.prototype.$ls.get(MULTI_TAB, config.multiTab)
  );
}
