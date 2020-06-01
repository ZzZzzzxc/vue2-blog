import Vue from "vue";
import VueRouter from "vue-router";

import { homePageRouter, othersRouter } from "./modules/index";

Vue.use(VueRouter);

const routes = [];

const publicRouter = {
  path: "/public",
  meta: { authority: ["all"] },
  children: [],
  redirect: "/login",
  component: { render: h => h("router-view") }
};

const rootRouter = {
  path: "/",
  redirect: "/dashboard/analysis",
  meta: { authority: ["guest", "admin"] },
  children: [],
  component: () =>
    import(/* webpackChunkName: "layout" */ "../layouts/FormBasicLayout")
};

// const redirectRouter = {
//   path: "*",
//   meta: { authority: ["guest", "admin"] },
//   redirect: "/posts/list",
// };

homePageRouter.forEach(route => route(rootRouter.children));
othersRouter.forEach(route => route(publicRouter.children));

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat([
    publicRouter,
    rootRouter
    // redirectRouter
  ])
});

export default router;
