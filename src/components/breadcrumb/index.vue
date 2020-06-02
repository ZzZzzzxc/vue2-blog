<template>
  <div>
    <span>/Home/</span>
    <a-breadcrumb :routes="routes">
      <template slot="itemRender" slot-scope="{ route, params, routes, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.meta.breadcrumbName || route.name }}
        </span>
        <router-link v-else :to="`${basePath}/${paths.join('/')}`">
          {{ route.meta.breadcrumbName || route.name }}
        </router-link>
      </template>
    </a-breadcrumb>
    <br />
  </div>
</template>
<script>
export default {
  props: {
    routeName: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      basePath: "",
      routes: [],
    };
  },
  methods: {
    initData() {
      const routes = this.$router.options.routes;
      for (let item of routes) {
        let children = item.children;
        if (!children) continue;
        for (let child of children) {
          if (child.name === this.routeName) {
            this.routes.push(child);
          }
        }
      }
      return;
    },
  },
  created() {
    this.initData();
    console.log(this.routes);
  },
};
</script>
