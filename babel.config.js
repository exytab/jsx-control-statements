var plugin = require("./src/index");

module.exports = function(api) {
  api.cache(false);

  return {
    presets: ["@babel/preset-env", [
      "@babel/preset-react", {
        runtime: "automatic"
        , development: true
      }
    ]],
    plugins: [plugin]
  }
}
