const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
   ** Headers of the page
   */
  head: {
    title: "Top Notch THC",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Marijuana dispensary located in Las Vegas, NV."
      }
    ],
    script: [
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans&family=Open+Sans+Condensed:wght@300;700&display=swap"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ["bootstrap-vue/nuxt", "@nuxt/content"],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },
  /*
   ** Build configuration
   */
  target: "static",
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
