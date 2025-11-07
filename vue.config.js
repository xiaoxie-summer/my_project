module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/baidu-map': {
        target: 'https://api.map.baidu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/baidu-map': ''
        }
      }
    }
  }
};