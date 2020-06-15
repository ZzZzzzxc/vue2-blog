const tokens = {
  admin: {
    token: "admin-token",
  },
};

const users = {
  "admin-token": {
    role: {
      id: "admin",
      name: "管理员",
      describe: "any thing",
      permissions: [
        {
          roleId: "admin",
          permissionId: "dashboard",
          permissionName: "仪表盘",
        },
        {
          roleId: "admin",
          permissionId: "account",
          permissionName: "账户管理",
        },
        {
          roleId: "admin",
          permissionId: "post",
          permissionName: "文章管理",
        },
      ],
    },
    avatar: "https://cdn.zhangxc.cn/image/jpeg/2020-05-19 230011.jpg",
    name: "zhang xue cong",
    info: {
      blog: "https://blog.zhangxc.cn",
      phone: "13690896312",
      wx: "13690896312",
      email: "731458684@qq.com",
    },
  },
};

module.exports = [
  // user login
  {
    url: "/user/login",
    type: "post",
    response: (config) => {
      const { userName } = config.body;
      const token = tokens[userName];
      // mock error
      if (!token) {
        return {
          code: 500,
          message: "账号或密码错误😂",
        };
      }
      const res = { ...config.body, ...token };
      return {
        code: 200,
        data: res,
      };
    },
  },

  // get user info
  {
    url: "/user/info",
    type: "get",
    response: (config) => {
      const { token } = config.query;
      const info = users[token];
      // mock error
      if (!info) {
        return {
          code: 500,
          message: "未能正确获取用户信息",
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
    url: "/user/logout",
    type: "get",
    response: () => {
      const res = {
        message: "用户成功退出登录",
      };
      return {
        code: 200,
        data: res,
      };
    },
  },
];
