<template>
  <div>
    <template v-if="keepAlive || multiTab || $route.meta.keepAlive">
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
  props: {
    keepAlive: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["multiTab"]),
  },
};
</script>
