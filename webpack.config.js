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
    ],
    module: {
        // 配置用来解析 .css文件的 loader
        rules: [
            {
                // 用正则匹配当前 .css 结尾的文件
                // webpack 底层调用这些包的顺序是从右到左的管道顺序
                test: /\.css$/,
                // css-loader 用来解析 css 文件 
                // style-loader 将解析的结果放到html中, 使其生效
                use: ["style-loader", "css-loader"]
            },
            // 配置用来解析 .less 文件
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            // 配置用来解析 .scss .sass 文件
            {
                test: /\.s(a|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}