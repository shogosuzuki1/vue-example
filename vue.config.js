const { defineConfig } = require("@vue/cli-service");
const { VuetifyPlugin } = require("webpack-plugin-vuetify");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new VuetifyPlugin()],
  },
  chainWebpack: (config) => {
    config.plugin("define").tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: "true",
        __VUE_PROD_DEVTOOLS__: "false",
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      });
      return definitions;
    });
  },
});

// module.exports = {
//   chainWebpack: (config) => {
//     config.plugin("define").tap((definitions) => {
//       Object.assign(definitions[0], {
//         __VUE_OPTIONS_API__: "true",
//         __VUE_PROD_DEVTOOLS__: "false",
//         __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
//       });
//       return definitions;
//     });
//   },
// };
