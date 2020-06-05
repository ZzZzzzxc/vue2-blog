import Vue from "vue";
import router from "./router";
import store from "./store";

import NProgress from "nprogress"; // progress bar
import notification from "ant-design-vue/es/notification";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["login", "register", "registerResult"]; // no redirect whitelist
const defaultRoutePath = "/dashboard/analysis";
const loginRoutePath = "/user/login";

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  const token = Vue.prototype.$ls.get("ACCESS_TOKEN");
  if (token) {
    /* has token */
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath });
      NProgress.done();
    } else {
      if (store.getters.role.length === 0) {
        store
          .dispatch("GetUserInfo", token)
          .then(res => {
            const role = res.data && res.data.role;
            store.dispatch("GenerateRoutes", role).then(() => {
              // 根据role权限生成可访问的路由表
              // 动态添加可访问路由表
              router.addRoutes(store.getters.addRouters);
              next({ path: defaultRoutePath });
            });
          })
          .catch(() => {
            notification.error({
              message: "错误",
              description: "请求用户信息失败，请重试"
            });
            store.dispatch("Logout").then(() => {
              next({ path: loginRoutePath, query: { redirect: to.fullPath } });
            });
          });
      } else {
        next();
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } });
      NProgress.done(); // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
