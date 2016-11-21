var path = require('path');
module.exports = {
    build: {
        env: require('./prod.env'),
        // index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: '/',
        assetsPublicPath: '..',
        productionSourceMap: false,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: require('./dev.env'),
        port: 8080,
        assetsSubDirectory: '/',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false
    }
}