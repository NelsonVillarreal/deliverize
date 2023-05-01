const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://teamsoft.com.br',
      changeOrigin: true,
    })
  );
};
