<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider
      :theme="navTheme"
      v-if="isSideMenu()"
      v-model="sidebarOpened"
      :trigger="null"
      collapsible
      :width="256"
    >
      <Logo />
      <Menu :addRouters="addRouters" />
    </a-layout-sider>
    <a-layout>
      <GlobalHeader />
      <a-layout-content :style="{ paddingTop: fixedHeader ? '64px' : '0' }">
        <MultiTab v-if="multiTab" />
        <RouterView />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
    <SettingDrawer />
  </a-layout>
</template>
<script>
import {
  GlobalHeader,
  SettingDrawer,
  Logo,
  Menu,
  MultiTab,
  RouterView,
} from "@/components/index";
import { mixin, mixinDevice } from "@/utils/mixin";
import { mapState } from "vuex";
export default {
  name: "BasicLayout",
  mixins: [mixin, mixinDevice],
  data() {
    return {};
  },
  components: {
    Menu,
    Logo,
    SettingDrawer,
    GlobalHeader,
    MultiTab,
    RouterView,
  },
  computed: {
    ...mapState({
      // 动态主路由
      addRouters: (state) => state.permission.addRouters,
    }),
  },
};
</script>

<style lang="less" scoped></style>
