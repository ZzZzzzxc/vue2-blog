<template>
  <div class="collapsed-btn-wrapper">
    <a-icon
      class="trigger"
      :type="sidebarOpened ? 'menu-unfold' : 'menu-fold'"
      @click="toggleCollapsed"
    />
  </div>
</template>

<script>
import { mixin } from "@/utils/mixin";
export default {
  name: "CollapsedButton",
  mixins: [mixin],
  methods: {
    toggleCollapsed() {
      this.$store.dispatch("setSidebar", !this.sidebarOpened);
    }
  }
};
</script>

<style lang="less" scoped>
.collapsed-btn-wrapper {
  display: inline-block;
  width: 80px;
  padding: 0 12px;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>
