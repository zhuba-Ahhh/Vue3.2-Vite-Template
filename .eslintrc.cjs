/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    //环境
    browser: true,
    es2021: true,
  },
  extends: [
    // 一些拓展预设配置,通常是最佳实践
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier", //放最后
  ],
  parser: "vue-eslint-parser",
  //指定解析器 https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser
  parserOptions: {
    //解析器的配置项
    ecmaVersion: "latest",
    //版本 可以改为esXXXX
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: [
    "vue",
    "@typescript-eslint",
    // 'prettier',
    //在 eslint-config-prettier 8.0.0 版本后，extends 不再需要为单独的插件引入对应扩展来覆盖冲突了，统一引入 'prettier' 即可。
    //eslint-plugin-prettier 将prettier作为eslint的插件使用
  ],
  rules: {
    "no-irregular-whitespace": "error",
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-function": 1, //空函数，definePorps时会用到
    "vue/multi-word-component-names": 1,
  },
};
