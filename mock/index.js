const Mock = require("mockjs");
const mocks = require("./controller/index");

// for mock server
const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
    type: type || "get",
    response(req, res) {
      console.log("request invoke:" + req.path);
      res.json(
        Mock.mock(respond instanceof Function ? respond(req, res) : respond)
      );
    },
  };
};

module.exports = mocks.map((route) => {
  return responseFake(route.url, route.type, route.response);
});
