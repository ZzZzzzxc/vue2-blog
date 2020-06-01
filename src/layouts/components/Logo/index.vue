<template>
  <div
    :class="[
      'logo',
      isTopMenu()
        ? isDark()
          ? 'topmenu-dark'
          : 'topmenu-light'
        : isDark()
        ? 'sidemenu-dark'
        : 'sidemenu-light',
      sidebarOpened ? 'closed' : 'opened'
    ]"
  >
    <span v-if="showTitle">{{ title }}</span>
  </div>
</template>

<script>
import { mixin, mixinDevice } from "@/utils/mixin";
export default {
  mixins: [mixin, mixinDevice],
  props: {
    title: {
      type: String,
      default: "Zhangxc",
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../styles/theme.less";
.logo {
  height: @topmenu-height;
  line-height: @topmenu-height;
  text-align: center;
  font-size: @logo-fsize;
  font-weight: bold;
  transition: 0.3s;
  overflow: hidden;
}
.closed {
  width: @sidemenu-width-collapsed;
}
.opened {
  width: @sidemenu-width-uncollapsed;
}
.topmenu-dark {
  background-color: @dark;
  color: #fff;
}
.topmenu-light {
  background-color: rgba(255, 255, 255, 0.2);
}
.sidemenu-dark {
  background-color: @dark;
  color: #fff;
}
.sidemenu-light {
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid @grey;
  border-right: 1px solid @grey;
}
</style>
