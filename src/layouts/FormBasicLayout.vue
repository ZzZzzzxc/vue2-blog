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
      <Menu />
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
        <Menu v-if="isTopMenu()" />
        <UserMenu />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
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
import UserMenu from "@/components/UserMenu";
import CollapsedButton from "@/components/CollapsedButton";
import { mixin, mixinDevice } from "@/utils/mixin";
export default {
  name: "FormBasicLayout",
  mixins: [mixin, mixinDevice],
  data() {
    return {};
  },
  components: {
    Menu,
    Logo,
    SettingDrawer,
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
