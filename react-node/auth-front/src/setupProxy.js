const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use("/mail", createProxyMiddleware({target: "http://localhost:8080", changeOrigin:true}));
    app.use("/auth", createProxyMiddleware({target: "http://localhost:8000", changeOrigin:true}));
    app.use("/content", createProxyMiddleware({target: "http://localhost:8001", changeOrigin:true}));
}