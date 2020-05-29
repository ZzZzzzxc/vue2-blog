export default function(router) {
  router.push({
    path: "/dashboard",
    name: "dashboard",
    component: { render: h => h("router-view") },
    meta: { icon: "form", title: "dashboard", authority: ["guest", "admin"] },
    redirect: "/dashboard/analysis",
    children: [
      {
        path: "analysis",
        name: "analysis",
        meta: {
          icon: "database",
          title: "analysis",
          authority: ["guest", "admin"]
        },
        component: () =>
          import(
            /* webpackChunkName: "common" */ "../../../views/dashboard/analysis.vue"
          )
      }
    ]
  });
}
