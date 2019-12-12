const path = require('path')
module.exports = {
  publicPath: '/zhengfu',
  devServer: {
    proxy: {
      '/api': {
        target: `https://www.bjd33.cn`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/less/variable.less')
      ]
    }
  }
}
