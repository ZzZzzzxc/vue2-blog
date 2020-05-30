<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider
      v-model="collapsed"
      collapsible
      :theme="navTheme"
      v-if="isSideMenu()"
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
          'flex-direction': isSideMenu() ? 'row-reverse' : 'row',
        }"
      >
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
import Logo from "./components/Logo";
import SettingDrawer from "./components/SettingDrawer/SettingDrawer";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import UserMenu from "./components/UserMenu/index";
import { mixin, mixinDevice } from "@/utils/mixin";
export default {
  name: "FormBasicLayout",
  mixins: [mixin, mixinDevice],
  data() {
    return {
      collapsed: false,
    };
  },
  components: { SideMenu, Logo, SettingDrawer, HeaderMenu, UserMenu },
};
</script>
