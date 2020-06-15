<template>
  <PageLayout :title="title"
    ><div style="height:300vh">{{ $route.path }}</div>
  </PageLayout>
</template>

<script>
import { PageLayout } from "@/layouts/index";
export default {
  name: "AccountSetting",
  data() {
    return {
      title: "个人中心"
    };
  },
  components: { PageLayout },
  methods: {}
};
</script>

<style></style>
