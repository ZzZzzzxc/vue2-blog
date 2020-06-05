import api from "../index";
import service from "../../plugins/axios/axios";

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
  console.log(`[POST] ${api.Login}`);
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
  console.log(`[GET] ${api.UserInfo}`);
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
  console.log(`[GET] ${api.Logout}`);
  return service({
    url: api.Logout,
    method: "get"
  });
}
