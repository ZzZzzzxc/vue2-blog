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
    color: "#1890FF"
    // 是否开启色弱模式
    // weak: false
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
    }
  },
  actions: {
    setColor(context, color) {
      context.commit("setColor", color);
    }
  }
};

export default app;
