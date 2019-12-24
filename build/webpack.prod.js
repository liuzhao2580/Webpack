const merge = require("webpack-merge")
const webapckBase = require("./webpack.config.js")
const webpack = require("webpack")
module.exports = merge(webapckBase, {
    // 用于设置文件的导出方式 主要是判断是否压缩代码
    // development 开发环境
    // production  项目部署的生产环境  默认为生产环境
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: "false"
        })
    ]
})