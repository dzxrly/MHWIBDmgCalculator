// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    "space-before-function-paren": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: ["error", "single"], //强制使用单引号
    semi: ["error", "never"], //强制不使用分号结尾
    eqeqeq: ["error", "always"], // 强制在任何情况下都使用 === 和 !==
    "brace-style": ["error", "1tbs", { allowSingleLine: true }] //强制在代码块中使用一致的大括号风格
  }
};
