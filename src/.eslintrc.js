module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: ["plugin:react/recommended", "airbnb"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {},
    env: {
      es6: true,
      node: true
    },
    extends: ["eslint:recommended", "prettier"],
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      requireConfigFile: false
    },
    env: {
      browser: true
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    rules: {
      "no-console": "off"
    },
    parser: "@babel/eslint-parser"
  };
  