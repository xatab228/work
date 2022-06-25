const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => ({
          ...options,
          customElement: true,
          // compilerOptions: {
          //   customElement: true
          // }
        }))
  }
})
