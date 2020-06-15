<template>
  <div>
    <!-- 多页签模式 || 缓存 -->
    <template v-if="multiTab || $route.meta.keepAlive">
      <keep-alive>
        <router-view :key="$route.fullPath" />
      </keep-alive>
    </template>
    <template v-else>
      <router-view :key="$route.fullPath" />
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RView",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["multiTab"]),
  },
};
</script>
