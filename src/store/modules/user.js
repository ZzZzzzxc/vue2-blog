import Vue from "vue";
import { login, getUserInfo, logout } from "@/api/modules/user";
import notification from "ant-design-vue/es/notification";

const user = {
  state: {
    // token
    token: "",
    // 名字
    name: "",
    // 头像
    avatar: "",
    // 角色
    role: [],
    // 信息
    info: {}
  },

  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
    setName: (state, { name }) => {
      state.name = name;
    },
    setAvatar: (state, avatar) => {
      state.avatar = avatar;
    },
    setRole: (state, role) => {
      state.role = role;
    },
    setInfo: (state, info) => {
      state.info = info;
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      Vue.prototype.$log.store("ACTION", "Login");
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            const { data, code, message } = response;
            if (code === 200) {
              Vue.prototype.$ls.set(
                "ACCESS_TOKEN",
                data.token,
                7 * 24 * 60 * 60 * 1000
              );
              commit("setToken", data.token);
              resolve(response);
            } else {
              notification.error({
                message: code,
                description: message
              });
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    GetUserInfo({ commit }) {
      Vue.prototype.$log.store("ACTION", "GetUserInfo");
      const token = Vue.prototype.$ls.get("ACCESS_TOKEN");
      return new Promise((resolve, reject) => {
        getUserInfo(token)
          .then(response => {
            const data = response.data;
            if (data.role && data.role.permissions.length > 0) {
              const role = data.role;
              role.permissions = data.role.permissions;
              role.permissions.map(per => {
                if (
                  per.actionEntitySet != null &&
                  per.actionEntitySet.length > 0
                ) {
                  const action = per.actionEntitySet.map(action => {
                    return action.action;
                  });
                  per.actionList = action;
                }
              });
              role.permissionList = role.permissions.map(permission => {
                return permission.permissionId;
              });
              commit("setRole", data.role);
              commit("setInfo", data);
            } else {
              reject(new Error("getInfo: role must be a non-null array !"));
            }

            commit("setName", { name: data.name });
            commit("setAvatar", data.avatar);

            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 登出
    Logout({ commit, state }) {
      Vue.prototype.$log.store("ACTION", "Logout");
      return new Promise(resolve => {
        logout(state.token)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            resolve(error);
          })
          .finally(() => {
            commit("setToken", "");
            commit("setRole", []);
            Vue.prototype.$ls.remove("ACCESS_TOKEN");
          });
      });
    }
  }
};

export default user;
