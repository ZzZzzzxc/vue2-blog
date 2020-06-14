import Vue from "vue";
import Router from "vue-router";
import { constantRouterMap } from "@/configs/router.config";

Vue.use(Router);

const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap
});
export default router;
