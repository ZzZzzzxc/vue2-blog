import Vue from "vue";
import api from "../index";
import service from "../../plugins/axios/axios";

Vue.prototype.$log.file("@api/modules/user.js");

/**
 * login
 * parameter: {
 *     username: '',
 *     password: '',
 * }
 * @param parameter
 * @returns {*}
 */
export function login(parameter) {
  Vue.prototype.$log.api("POST", api.Login);
  return service({
    url: api.Login,
    method: "post",
    data: parameter
  });
}

/**
 * get user info
 * parameter: {
 *     username: '',
 *     password: '',
 * }
 * @param parameter
 * @returns {*}
 */
export function getUserInfo(token) {
  Vue.prototype.$log.api("GET", api.UserInfo);
  return service({
    url: api.UserInfo,
    method: "get",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    params: { token }
  });
}

/**
 * logout
 * parameter: {
 *     username: '',
 *     password: '',
 * }
 * @param parameter
 * @returns {*}
 */
export function logout() {
  Vue.prototype.$log.api("GET", api.Logout);
  return service({
    url: api.Logout,
    method: "get"
  });
}
