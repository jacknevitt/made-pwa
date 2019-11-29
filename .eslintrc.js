module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ["cypress"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:cypress/recommended",
    `react-app`,
  ],
  rules: {
    "react/prop-types": 0,
    "import/order": [1, { "newlines-between": "always" }],
  },
}
