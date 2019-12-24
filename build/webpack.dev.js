const merge = require("webpack-merge")
const webapckBase = require("./webpack.config.js")
const webpack = require("webpack")
module.exports = merge(webapckBase, {
    // 用于设置文件的导出方式 主要是判断是否压缩代码
    // development 开发环境
    // production  项目部署的生产环境  默认为生产环境
    mode: "development",
    // webpack-dev-server 的基本配置
    devServer: {
        open: true, // 自动打开浏览器
        port: 9527, // 设置运行的端口
        hot: true, // 设置热编译 简单来说就是每次编译的时候, 会编译改变的文件
        compress: true, // 打包的文件进行压缩
        contentBase: "./public" // 配置默认的入口文件  默认的是 / 项目根目录
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: "true"
        })
    ],
    devtool: "cheap-module-eval-source-map"
})