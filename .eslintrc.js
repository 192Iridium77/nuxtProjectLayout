const resolve = require("path").resolve;

const ignore = 0;
const warn = 1;
const error = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "problems"
  ],
  plugins: ["vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? error : ignore,
    "no-debugger": process.env.NODE_ENV === "production" ? error : ignore,
    "no-undef": ignore,
    "no-use-before-define": ignore
  },
  globals: {
    __BASE_URL: false,
    __CLOUDINARY_NAME: false
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            alias: {
              "~": resolve(__dirname, "web")
            },
            extensions: [".js", ".vue"]
          }
        }
      },
      node: {
        extensions: [".js", ".vue"]
      }
    }
  }
};