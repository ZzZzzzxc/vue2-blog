import { FormBasicLayout } from "@/layouts";

export const asyncRouterMap = [];

export const constantRouterMap = [
  {
    path: "/",
    // 顶层路由不设置名字，否则会渲染进菜单栏
    // name: "Home",
    meta: {
      icon: "form",
      title: "Home"
    },
    component: FormBasicLayout,
    redirect: "/post/list",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: { render: h => h("router-view") },
        meta: {
          icon: "form",
          title: "dashboard",
          authority: ["guest", "admin"]
        },
        redirect: "/dashboard/analysis",
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            meta: {
              icon: "database",
              title: "analysis",
              authority: ["guest", "admin"]
            },
            component: () =>
              import(
                /* webpackChunkName: "common" */ "@/views/dashboard/analysis.vue"
              )
          }
        ]
      },
      {
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
              authority: ["guest", "admin"],
              breadcrumbIcon: "home"
            },
            component: () =>
              import(/* webpackChunkName: "common" */ "@/views/posts/edit.vue")
          },
          {
            path: "/post/list",
            name: "list",
            meta: {
              icon: "database",
              title: "list",
              authority: ["guest", "admin"],
              breadcrumbIcon: "home"
            },
            component: () =>
              import(/* webpackChunkName: "common" */ "@/views/posts/list.vue")
          }
        ]
      },
      {
        path: "/account",
        name: "account",
        component: { render: h => h("router-view") },
        meta: { icon: "form", title: "account", authority: ["guest", "admin"] },
        redirect: "/account/setting",
        children: [
          {
            path: "/account/setting",
            name: "setting",
            meta: {
              icon: "database",
              title: "setting",
              authority: ["guest", "admin"]
            },
            component: () =>
              import(
                /* webpackChunkName: "common" */ "@/views/account/setting.vue"
              )
          },
          {
            path: "/account/center",
            name: "center",
            meta: {
              icon: "database",
              title: "center",
              authority: ["guest", "admin"]
            },
            component: () =>
              import(
                /* webpackChunkName: "common" */ "@/views/account/center.vue"
              )
          }
        ]
      }
    ]
  },

  {
    name: "404",
    path: "/404",
    meta: {
      icon: "database",
      title: "center",
      authority: ["guest", "admin"]
    },
    component: () =>
      import(/* webpackChunkName: "fail" */ "@/views/exception/404")
  },

  {
    path: "*",
    redirect: "/404"
  }
];
