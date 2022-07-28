const { defineConfig } = require("cypress");
const webpackConfig = require("./config/webpack.config.js");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
	  webpackConfig,
    },
  },
});
