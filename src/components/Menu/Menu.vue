<template>
  <div :class="isTopMenu() ? 'topmenu' : ''">
    <Logo v-if="isTopMenu()" />
    <a-menu
      :theme="navTheme"
      :mode="isTopMenu() ? 'horizontal' : 'inline'"
      :selectedKeys="selectedKeys"
      :openKeys.sync="openKeys"
      :class="isTopMenu() ? 'topmenu' : ''"
    >
      <template v-for="item in menuData">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="() => $router.push({ path: item.path, query: $route.query })"
        ></a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path"></sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from "./SubMenu";
import Logo from "../Logo/index";
import { mixin, mixinDevice } from "@/utils/mixin";
export default {
  mixins: [mixin, mixinDevice],
  components: { SubMenu, Logo },
  data() {
    this.selectedKeysMap = {};
    this.openKeysMap = {};
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      menuData,
      selectedKeys: this.selectedKeysMap[this.$route.path],
      openKeys: this.openKeysMap[this.$route.path]
    };
  },
  watch: {
    "$route.path": function(val) {
      this.selectedKeys = this.selectedKeysMap[val];
      this.openKeys = this.openKeysMap[val];
    }
  },
  methods: {
    getMenuData(routes = [], parentKeys = [], selectedKey) {
      const menuData = [];
      for (let item of routes) {
        if (item.name && !item.hideInMenu) {
          this.openKeysMap[item.path] = parentKeys;
          this.selectedKeysMap[item.path] = [selectedKey || item.path];
          const newItem = { ...item };
          delete newItem.children;
          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this.getMenuData(item.children, [
              ...parentKeys,
              item.path
            ]);
          } else {
            this.getMenuData(
              item.children,
              selectedKey ? parentKeys : [...parentKeys, item.path],
              selectedKey || item.path
            );
          }
          menuData.push(newItem);
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenInMenu &&
          item.children
        ) {
          menuData.push(
            ...this.getMenuData(item.children, [...parentKeys, item.path])
          );
        }
      }
      return menuData;
    }
  }
};
</script>

<style lang="less" scoped>
.topmenu {
  display: flex;
  align-items: center;
  line-height: 64px;
}
</style>
