const tokens = {
  admin: {
    token: "admin-token",
  },
  editor: {
    token: "editor-token",
  },
};

const users = {
  "admin-token": {
    roles: ["admin"],
    avatar: "https://cdn.zhangxc.cn/image/jpeg/2020-05-19 230011.jpg",
    name: "zhang xue cong",
    info: {
      blog: "https://blog.zhangxc.cn",
      phone: "13690896312",
      wx: "13690896312",
      email: "731458684@qq.com",
    },
  },
  "editor-token": {
    roles: ["editor"],
    avatar: "https://cdn.zhangxc.cn/image/jpeg/2020-05-19 230011.jpg",
    name: "Normal Editor",
  },
};

module.exports = [
  // user login
  {
    url: "/user/login",
    type: "post",
    response: (config) => {
      const { username } = config.body;
      const token = tokens[username];

      // mock error
      if (!token) {
        return {
          code: 500,
          message: "Account and password are incorrect.",
        };
      }

      return {
        code: 200,
        data: token,
      };
    },
  },

  // get user info
  {
    url: "/user/info.*",
    type: "get",
    response: (config) => {
      const { token } = config.query;
      const info = users[token];

      // mock error
      if (!info) {
        return {
          code: 500,
          message: "Login failed, unable to get user details.",
        };
      }

      return {
        code: 200,
        data: info,
      };
    },
  },

  // user logout
  {
    url: "/vue-admin-template/user/logout",
    type: "post",
    response: () => {
      return {
        code: 20000,
        data: "success",
      };
    },
  },
];
