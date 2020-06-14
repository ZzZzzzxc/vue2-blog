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
    fixSiderbar: false,
    // 自动隐藏头部导航栏
    autoHideHeader: false,
    // 主题色
    color: "#1890FF",
    // 是否开启色弱模式
    weak: false,
    // 是否开启多页签模式
    multiTab: true
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
    setLayout(state, layout) {
      state.layout = layout;
    },
    setColor(state, color) {
      state.color = color;
    },
    setSidebar(state, sidebar) {
      state.sidebar = sidebar;
    },
    setFixedHeader(state, fixedHeader) {
      state.fixedHeader = fixedHeader;
    },
    setAutoHideHeader(state, autoHideHeader) {
      state.autoHideHeader = autoHideHeader;
    },
    setWeak(state, weak) {
      state.weak = weak;
    },
    setMultiTab(state, multiTab) {
      state.multiTab = multiTab;
    }
  },
  actions: {
    setColor(context, color) {
      context.commit("setColor", color);
    },
    setSidebar(context, sidebar) {
      context.commit("setSidebar", sidebar);
    },
    setFixedHeader(context, fixedHeader) {
      context.commit("setFixedHeader", fixedHeader);
    }
  }
};

export default app;
