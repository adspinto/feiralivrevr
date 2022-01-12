module.exports = function (api) {
  api.cache(true);
  return {
      presets: ["module:metro-react-native-babel-preset"],
      plugins: [
          [
              "module-resolver",
              {
                  root: ["."],
                  extensions: [".js", ".jsx", ".es", ".es6", ".mjs", ".ts", ".tsx", "ios.js", "android.js"],
                  alias: {
                      "@globalComponents": "./src/globalComponents",
                      "@resources": "./src/resources",
                      "@services": "./src/services",
                  },
              },
          ],
      ],
  };
};
