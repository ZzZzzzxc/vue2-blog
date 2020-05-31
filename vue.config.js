const path = require("path");
const webpack = require("webpack");
const createThemeColorReplacerPlugin = require("./config/plugin.config");

function resolve(dir) {
  return path.join(__dirname, dir);
}
// vue.config.js
const vueConfig = {
  configureWebpack: {
    // webpack plugins
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  },

  chainWebpack: (config) => {
    config.resolve.alias.set("@$", resolve("src"));

    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-svg-icon-loader")
      .loader("vue-svg-icon-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]",
      });
  },

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#1DA57A",
            "link-color": "#1DA57A",
            "border-radius-base": "2px",
          },
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true,
        },
      },
    },
  },

  devServer: {
    port: 8080,
  },
  productionSourceMap: false,
  lintOnSave: undefined,
  transpileDependencies: [],
};

vueConfig.configureWebpack.plugins.push(createThemeColorReplacerPlugin());

module.exports = vueConfig;
