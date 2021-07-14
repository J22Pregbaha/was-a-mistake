module.exports = {
    devServer: {
        port: 8086,
        proxy: {
            '^/mail': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/mail': ''
                }
            },
            '^/auth': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/auth': ''
                }
            }
        }
    }
}