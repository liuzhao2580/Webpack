const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    // 入口文件的配置
    entry: "./src/index.js",
    // 出口文件的配置 
    // 出口文件必须使用的是绝对路径 导入 path 模块 必须为对象
    output: {
        /* 
        * path : 用于指定文件的导出路径
        * name : 用于指定文件的导出名称
        */
        path: path.join(__dirname, "./dist/"),
        filename: "main.js"
    },
    // 用于设置文件的导出方式 主要是判断是否压缩代码
	// development 开发环境
	// production  项目部署的生产环境  默认为生产环境
    mode: "production",
    // webpack-dev-server 的基本配置
    devServer: {
        open: true, // 自动打开浏览器
        port: 9527, // 设置运行的端口
        hot: true, // 设置热编译 简单来说就是每次编译的时候, 会编译改变的文件
        compress: true, // 打包的文件进行压缩
        contentBase: "./public" // 配置默认的入口文件  默认的是 / 项目根目录
    },
    plugins: [
        // // 配置 html-webpack-plugin 
        new HtmlWebpackPlugin({
            // 设置打包的文件名称
            filename: "index.html",
            // 设置需要打包的文件路径
            template: "./public/index.html"
        })
    ]
}