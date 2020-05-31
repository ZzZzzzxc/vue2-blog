<template>
  <div style="display:flex">
    <a-button type="primary" style="margin-bottom: 16px;">
      <a-icon type="menu-unfold" />
    </a-button>
    <a-menu
      :theme="navTheme"
      mode="horizontal"
      :default-selected-keys="['2']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        nav 1
      </a-menu-item>
      <a-menu-item key="2">
        nav 2
      </a-menu-item>
      <a-menu-item key="3">
        nav 3
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { mixin, mixinDevice } from "@/utils/mixin";
export default {
  mixins: [mixin, mixinDevice]
};
</script>
