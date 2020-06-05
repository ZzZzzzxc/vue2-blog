import { BasicLayout, UserLayout } from "@/layouts";

export const asyncRouterMap = [
  {
    path: "/",
    // 顶层路由不设置名字，否则会渲染进菜单栏
    // name: "Home",
    meta: {
      icon: "form",
      title: "Home"
    },
    component: BasicLayout,
    redirect: "/post/list",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: { render: h => h("router-view") },
        meta: {
          icon: "form",
          title: "dashboard",
          permission: ["dashboard"]
        },
        redirect: "/dashboard/analysis",
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            meta: {
              icon: "database",
              title: "analysis",
              permission: ["dashboard"]
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
        meta: { icon: "form", title: "post", permission: ["post"] },
        redirect: "/post/create",
        children: [
          {
            path: "/post/create",
            name: "create",
            meta: {
              icon: "database",
              title: "create",
              permission: ["post"],
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
              permission: ["post"],
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
        meta: { icon: "form", title: "account", permission: ["account"] },
        redirect: "/account/setting",
        children: [
          {
            path: "/account/setting",
            name: "setting",
            meta: {
              icon: "database",
              title: "setting",
              permission: ["account"]
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
              permission: ["account"]
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
    path: "*",
    redirect: "/404"
  }
];

export const constantRouterMap = [
  {
    path: "/user",
    // 顶层路由不设置名字，否则会渲染进菜单栏
    // name: "Home",
    meta: {
      icon: "form",
      title: "public"
    },
    component: UserLayout,
    redirect: "/user/login",
    children: [
      {
        path: "login",
        name: "login",
        meta: {
          icon: "form",
          title: "login"
        },
        component: () =>
          import(/* webpackChunkName: "common" */ "@/views/user/Login.vue")
      }
    ]
  },

  {
    name: "404",
    path: "/404",
    meta: {
      icon: "database",
      title: "center"
    },
    component: () =>
      import(/* webpackChunkName: "fail" */ "@/views/exception/404")
  }
];
