export default function(router) {
  router.push({
    path: "/post",
    name: "post",
    component: { render: h => h("router-view") },
    meta: { icon: "form", title: "post", authority: ["guest", "admin"] },
    redirect: "/post/create",
    children: [
      {
        path: "/post/create",
        name: "create",
        meta: {
          icon: "database",
          title: "create",
          authority: ["guest", "admin"]
        },
        component: () =>
          import(
            /* webpackChunkName: "common" */ "../../../views/posts/edit.vue"
          )
      },
      {
        path: "/post/list",
        name: "list",
        meta: {
          icon: "database",
          title: "list",
          authority: ["guest", "admin"]
        },
        component: () =>
          import(
            /* webpackChunkName: "common" */ "../../../views/posts/list.vue"
          )
      }
    ]
  });
}
