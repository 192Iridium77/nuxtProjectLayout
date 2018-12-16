const pkg = require("./package");
process.env.NODE_ENV = process.env.NODE_ENV || "development";
const useApiMiddleware = process.env.NODE_ENV !== "development";

const nuxtConfig = {
  srcDir: "web/",
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no;" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ]
  },
  loading: { color: "#fff" },
  // css: [{ src: "~/assets/css/style.scss", lang: "scss" }],
  plugins: [
    // { src: "~/plugins/axios" },
  ],
  modules: ["@nuxtjs/axios"],
  build: {
    styleResources: { scss: "./web/assets/css/_variables.scss" },
    transform: ["node_module/carousel"],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};

if (useApiMiddleware) {
  const apiMiddleware = require("./web/api");
  nuxtConfig.serverMiddleware = [apiMiddleware];
}

module.exports = nuxtConfig;
