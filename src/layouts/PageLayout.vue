<template>
  <div class="page-layout">
    <PageHeader :title="title" :avatar="avatar" />
    <!-- 多页签模式 || 缓存 -->
    <div class="page-layout__content"><slot></slot></div>
    <a-back-top />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader";
export default {
  name: "PageLayout",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "",
      required: false,
    },
    avatar: {
      type: String,
      default: "",
      required: false,
    },
  },
  components: { PageHeader },
  computed: {
    ...mapGetters(["multiTab"]),
  },
};
</script>

<style lang="less" scoped>
@import "@/styles/theme.less";
.page-layout {
  &__content {
    margin: 18px 36px;
  }
}
</style>
