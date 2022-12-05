const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/v2/collections/ekids/stat',
        {
            target:"https://api-mainnet.magiceden.dev",
            changeOrigin: true
        })
    )
}