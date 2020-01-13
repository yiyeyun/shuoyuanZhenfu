const path = require('path')
module.exports = {
  publicPath: '/yiyeyun',
  devServer: {
    proxy: {
      '/manager': {
        target: `https://www.bjd33.cn`,
        changeOrigin: true,
        pathRewrite: {
          '^/manager': '/manager'
        }
      }
      // "password": "111111",
      // "username": "13968137472"
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
