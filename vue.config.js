const path = require('path')
module.exports = {
  lintOnSave: false,

  chainWebpack: config => {
    const dir = path.resolve('src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.(svg)(\?.*)?$/)
      .include.add(dir).end()
      .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({extract: false}).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}))
      .end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir)
    // https://github.com/vuejs/vue-cli/issues/2398#issuecomment-503582811
    // config.resolve.alias.set('assets',
    //   path.resolve('src/assets'))
  },
  pluginOptions: {}
}
