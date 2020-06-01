<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider
      :theme="navTheme"
      v-if="isSideMenu()"
      v-model="sidebarOpened"
      :trigger="null"
      collapsible
    >
      <Logo />
      <SideMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        :style="{
          zIndex: 1,
          width: '100%',
          display: 'flex',
          'justify-content': 'space-between',
          'flex-direction': isSideMenu() ? 'row' : 'row',
          'background-color': isSideMenu()
            ? isDark()
              ? 'white'
              : 'white'
            : isLight()
            ? 'white'
            : '#001529'
        }"
      >
        <CollapsedButton v-if="isSideMenu()" />
        <HeaderMenu v-if="isTopMenu()" />
        <UserMenu />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          Bill is a cat.
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
    <SettingDrawer />
  </a-layout>
</template>
<script>
import SideMenu from "./components/SideMenu/SideMenu";
import Logo from "./components/Logo/index";
import SettingDrawer from "./components/SettingDrawer/SettingDrawer";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import UserMenu from "./components/UserMenu/index";
import CollapsedButton from "./components/CollapsedButton/index";
import { mixin, mixinDevice } from "@/utils/mixin";
export default {
  name: "FormBasicLayout",
  mixins: [mixin, mixinDevice],
  data() {
    return {};
  },
  components: {
    SideMenu,
    Logo,
    SettingDrawer,
    HeaderMenu,
    UserMenu,
    CollapsedButton
  }
};
</script>

<style lang="less" scoped>
.ant-layout-header {
  padding: 0;
}
</style>
