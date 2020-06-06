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
      <a-layout-content
        :style="{ margin: '0 16px', paddingTop: fixedHeader ? '64px' : '0' }"
      >
        <router-view :key="$route.fullPath" />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
    <SettingDrawer />
  </a-layout>
</template>
<script>
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import SettingDrawer from "@/components/SettingDrawer";
import GlobalHeader from "@/components/GlobalHeader";
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
    GlobalHeader
  },
  computed: {
    ...mapState({
      // 动态主路由
      addRouters: state => state.permission.addRouters
    })
  }
};
</script>

<style lang="less" scoped></style>
