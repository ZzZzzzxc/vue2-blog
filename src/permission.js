import Vue from "vue";
import router from "./router";
import store from "./store";

import NProgress from "nprogress"; // progress bar
import notification from "ant-design-vue/es/notification";
import { ACCESS_TOKEN } from "./store/mutation-type";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["login", "register", "registerResult"]; // no redirect whitelist
const defaultRoutePath = "/dashboard/analysis";
const loginRoutePath = "/user/login";

Vue.prototype.$log.file("@/permission.js");

router.beforeEach((to, from, next) => {
  // 进度条开始
  NProgress.start();
  // 从localStorage中取token
  const token = Vue.prototype.$ls.get(ACCESS_TOKEN);
  // 如果有token
  if (token) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath });
      NProgress.done();
    } else {
      // 如果Vuex中没有权限信息
      if (store.getters.role.length === 0) {
        // 获取用户信息
        store
          .dispatch("GetUserInfo", token)
          .then(res => {
            const role = res.data && res.data.role;
            // 根据role权限生成可访问的路由表
            store.dispatch("GenerateRoutes", role).then(() => {
              // 动态添加可访问路由表
              router.addRoutes(store.getters.addRouters);
              // 跳转到默认页
              next({ path: defaultRoutePath });
            });
          })
          .catch(() => {
            // Error
            notification.error({
              message: "错误",
              description: "请求用户信息失败，请重试"
            });
            // 登出
            store.dispatch("Logout").then(() => {
              next({ path: loginRoutePath, query: { redirect: to.fullPath } });
            });
          });
      } else {
        next();
      }
    }
  } else {
    // 没有token
    // 在免登录白名单，直接进入
    if (whiteList.includes(to.name)) {
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
