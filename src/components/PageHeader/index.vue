<template>
  <div class="page-header">
    <div class="page-header__breadcrumb">
      <Breadcrumb />
    </div>
    <div class="page-header__content">
      <div v-if="title" class="page-header__content__title">{{ title }}</div>
      <div v-if="avatar">{{ avatar }}</div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
export default {
  name: "PageHeader",
  props: {
    title: {
      type: String,
      default: "",
      required: false
    },
    avatar: {
      type: String,
      default: "",
      required: false
    }
  },
  components: { Breadcrumb },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "@/styles/theme.less";
.page-header {
  background-color: @light;
  padding: 12px 24px;
  &__breadcrumb {
    margin-bottom: 8px;
  }
  &__content {
    &__title {
      font-size: @page-title-fsize;
      font-weight: bold;
      color: @dark;
    }
  }
}
</style>
