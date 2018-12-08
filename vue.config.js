module.exports = {
    lintOnSave: false,
    devServer: {
        port: 8082,
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000',
                secure: false,
                changeOrigin: true,
            }
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            config.devtool = 'source-map'
        } 
    },
}