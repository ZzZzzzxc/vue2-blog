import Vue from "vue";
import {
  SIDEBAR_OPENED,
  NAVTHEME,
  LAYOUT_MODE,
  FIXED_HEADER,
  AUTO_HIDE_HEADER,
  PRIMARY_COLOR,
  MULTI_TAB,
  COLOR_WEAK,
} from "../mutation-type";

const app = {
  state: {
    // 侧栏是否展开
    sidebar: false,
    // 设备
    device: "desktop",
    // 主题
    theme: "light",
    // 布局
    layout: "sidemenu",
    // 宽度
    contentWidth: "",
    // 是否固定头部导航栏
    fixedHeader: false,
    // 是否固定侧边导航栏
    fixedSiderbar: false,
    // 自动隐藏头部导航栏
    autoHideHeader: false,
    // 主题色
    color: "#1890FF",
    // 是否开启色弱模式
    weak: false,
    // 是否开启多页签模式
    multiTab: true,
  },
  mutations: {
    setTheme(state, theme) {
      Vue.prototype.$ls.set(NAVTHEME, theme);
      state.theme = theme;
    },
    setLayout(state, layout) {
      Vue.prototype.$ls.set(LAYOUT_MODE, layout);
      state.layout = layout;
    },
    setColor(state, color) {
      Vue.prototype.$ls.set(PRIMARY_COLOR, color);
      state.color = color;
    },
    setSidebar(state, sidebar) {
      Vue.prototype.$ls.set(SIDEBAR_OPENED, sidebar);
      state.sidebar = sidebar;
    },
    setFixedHeader(state, fixedHeader) {
      Vue.prototype.$ls.set(FIXED_HEADER, fixedHeader);
      state.fixedHeader = fixedHeader;
    },
    setAutoHideHeader(state, autoHideHeader) {
      Vue.prototype.$ls.set(AUTO_HIDE_HEADER, autoHideHeader);
      state.autoHideHeader = autoHideHeader;
    },
    setWeak(state, weak) {
      Vue.prototype.$ls.set(COLOR_WEAK, weak);
      state.weak = weak;
    },
    setMultiTab(state, multiTab) {
      Vue.prototype.$ls.set(MULTI_TAB, multiTab);
      state.multiTab = multiTab;
    },
  },
  actions: {
    setColor(context, color) {
      context.commit("setColor", color);
    },
    setSidebar(context, sidebar) {
      context.commit("setSidebar", sidebar);
    },
    setLayout(context, layout) {
      context.commit("setLayout", layout);
    },
    setFixedHeader(context, fixedHeader) {
      context.commit("setFixedHeader", fixedHeader);
    },
  },
};

export default app;
