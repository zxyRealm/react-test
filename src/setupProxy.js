const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy(['^/api/'], {
      target: 'http://192.168.121.182', // target host
      changeOrigin: true, // needed for virtual hosted sites
      pathRewrite: {
        '^/api/': ''
      }
    })
  )
}
