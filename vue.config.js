const path = require('path')
module.exports = {
  lintOnSave: false,

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
    // https://github.com/vuejs/vue-cli/issues/2398#issuecomment-503582811
    // config.resolve.alias.set('assets',
    //   path.resolve('src/assets'))
  },
  pluginOptions: {
    svgSprite: {
      dir: 'src/assets/icons',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {extract: false},
      pluginOptions: {plainSprite: true}
    }
  }
}
