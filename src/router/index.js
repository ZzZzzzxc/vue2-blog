import Vue from "vue";
import Router from "vue-router";
import { constantRouterMap } from "@/configs/router.config";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap
});
export default router;
