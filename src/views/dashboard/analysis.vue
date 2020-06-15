<template>
  <PageLayout :title="title"
    ><div style="height:300vh">{{ $route.path }}</div>
  </PageLayout>
</template>

<script>
import { PageLayout } from "@/layouts/index";
export default {
  name: "analysis",
  data() {
    return {
      title: "分析页"
    };
  },
  components: { PageLayout },
  methods: {}
};
</script>

<style></style>
