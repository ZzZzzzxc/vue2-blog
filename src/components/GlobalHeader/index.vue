<template>
  <transition name="header">
    <a-layout-header
      v-if="visible"
      :style="{
        width:
          fixedHeader && isSideMenu()
            ? sidebarOpened
              ? 'calc(100% - 80px)'
              : 'calc(100% - 256px)'
            : '100%',
        position: fixedHeader ? 'fixed' : '',
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
      <Menu v-if="isTopMenu()" :addRouters="addRouters" />
      <UserMenu />
    </a-layout-header>
  </transition>
</template>

<script>
import Menu from "@/components/Menu";
import UserMenu from "@/components/UserMenu";
import CollapsedButton from "@/components/CollapsedButton";
import { mixin, mixinDevice } from "@/utils/mixin";
import { mapState } from "vuex";
export default {
  mixins: [mixin, mixinDevice],
  components: { Menu, UserMenu, CollapsedButton },
  data() {
    return {
      visible: true,
      oldScrollTop: 0
    };
  },
  computed: {
    ...mapState({
      // 动态主路由
      addRouters: state => state.permission.addRouters
    })
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll, { passive: true });
  },
  methods: {
    handleScroll() {
      if (!this.autoHideHeader) {
        return;
      }
      const scrollTop =
        document.body.scrollTop + document.documentElement.scrollTop;
      if (!this.ticking) {
        this.ticking = true;
        requestAnimationFrame(() => {
          if (this.oldScrollTop > scrollTop) {
            this.visible = true;
          } else if (scrollTop > 300 && this.visible) {
            this.visible = false;
          } else if (scrollTop < 300 && !this.visible) {
            this.visible = true;
          }
          this.oldScrollTop = scrollTop;
          this.ticking = false;
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.ant-layout-header {
  padding: 0;
  transition: width 0.2s;
  justify-content: space-between;
  z-index: 1;
  display: flex;
}
.header-enter-active {
  transition: all 0.25s ease;
}
.header-leave-active {
  transition: all 0.5s ease;
}
.header-enter,
.header-leave-to {
  opacity: 0;
}
</style>
