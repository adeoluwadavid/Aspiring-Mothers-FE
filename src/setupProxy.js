const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/authe", { target: "https://my-java-backend.herokuapp.com" })
  );
};