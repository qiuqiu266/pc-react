const path = require("path");
const pxtoviewport = require("postcss-px-to-viewport");

module.exports = {
  webpack: {
    // 配置路径别名：将来写路径可以简写
    alias: {
      // 需要redux相关内容，需要path.resolve方法生成相对路径
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@comps": path.resolve(__dirname, "./src/components"),
    },
  },
  style: {
    postcss: {
      plugins: [
        pxtoviewport({
          viewportWidth: 375,
        }),
      ],
    },
  },
};
