//webpack 配置 node.js 文件
const path = require('path')

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set("components", path.resolve(__dirname, "./src/components"))
            .set("styles", path.resolve(__dirname, "./src/assets/styles"))
            .set("images", path.resolve(__dirname, "./src/assets/images"))
            .set("utils", path.resolve(__dirname, "./src/utils"))
            .set("router", path.resolve(__dirname, "./src/router"))
    },
    devServer: {
        proxy: {
            '/data': {
                target: 'https://dms-dataapi.meizu.com',
                changeOrigin: true
            },
            '/index.php': {
                target: 'https://bbs-app.meizu.cn',
                changeOrigin: true
            },
            '/api': {
                target: 'https://detail.mall.meizu.com',
                changeOrigin: true
            }
        }
    }
}