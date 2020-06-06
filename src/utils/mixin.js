import { deviceEnquire, DEVICE_TYPE } from "@/utils/device";
import { mapState } from "vuex";

const mixin = {
  computed: {
    ...mapState({
      // 布局
      layoutMode: state => state.app.layout,
      // 主题
      navTheme: state => state.app.theme,
      // 主题色
      primaryColor: state => state.app.color,
      // 固定头部
      fixedHeader: state => state.app.fixedHeader,
      // 固定侧栏
      fixSiderbar: state => state.app.fixSiderbar,
      // 内容区宽度
      contentWidth: state => state.app.contentWidth,
      // 自动隐藏头部
      autoHideHeader: state => state.app.autoHideHeader,
      // 侧栏是否打开
      sidebarOpened: state => state.app.sidebar,
      // 是否开启多页签模式
      multiTab: state => state.app.multiTab,
      // 是否开启色弱模式
      colorWeak: state => state.app.weak
    })
  },
  methods: {
    isTopMenu() {
      return this.layoutMode === "topmenu";
    },
    isSideMenu() {
      return !this.isTopMenu();
    },
    isDark() {
      return this.navTheme === "dark";
    },
    isLight() {
      return !this.isDark();
    }
  }
};

const mixinDevice = {
  computed: {
    ...mapState({
      device: state => state.app.device
    })
  },
  methods: {
    isMobile() {
      return this.device === DEVICE_TYPE.MOBILE;
    },
    isDesktop() {
      return this.device === DEVICE_TYPE.DESKTOP;
    },
    isTablet() {
      return this.device === DEVICE_TYPE.TABLET;
    }
  }
};

const AppDeviceEnquire = {
  mounted() {
    const { $store } = this;
    deviceEnquire(deviceType => {
      switch (deviceType) {
        case DEVICE_TYPE.DESKTOP:
          $store.commit("TOGGLE_DEVICE", "desktop");
          $store.dispatch("setSidebar", true);
          break;
        case DEVICE_TYPE.TABLET:
          $store.commit("TOGGLE_DEVICE", "tablet");
          $store.dispatch("setSidebar", false);
          break;
        case DEVICE_TYPE.MOBILE:
        default:
          $store.commit("TOGGLE_DEVICE", "mobile");
          $store.dispatch("setSidebar", true);
          break;
      }
    });
  }
};

export { mixin, AppDeviceEnquire, mixinDevice };
