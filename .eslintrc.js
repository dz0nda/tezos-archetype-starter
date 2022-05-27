module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-base",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["jest"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "import/no-unresolved": [1, { commonjs: false }],
  },
};
