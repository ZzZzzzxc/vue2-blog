<template>
  <PageLayout :title="title"
    ><div style="height:300vh">{{ $route.path }}</div>
  </PageLayout>
</template>

<script>
import { PageLayout } from "@/layouts/index";
export default {
  name: "PostList",
  data() {
    return {
      title: "文章列表"
    };
  },
  components: { PageLayout },
  methods: {}
};
</script>

<style></style>
