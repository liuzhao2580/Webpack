const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
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
        }),
        // 使用 clean-webpack-plugin 插件
        new CleanWebpackPlugin()
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
            },
            // 用来配置 file-loader 和 url-loader
            {
                test: /\.(png|gif|jpg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        /* 
                        用来限制图片文件的大小
                        如果图片大于了 5KB的时候, 就以路径的形式展示
                        小于的话就是用base64格式展示
                        */
                        limit: 5 * 1024,
                        /* 
                        设置打包输出的目录
                        这里就是在 dist 文件下新建一个 status/images
                        用于存放图片
                        */
                        outputPath: "status/images",
                        /* 
                        设置打包的图片的名称
                        [name]: 表示当前的文件使用原始名称
                        [hash:8]: 表示文件使用 8位hash格式的命名
                        [ext]: 表示文件的后缀名称保持原样
                        */
                        name: '[name]-[hash:8].[ext]'
                    }
                }]
            },
            // 设置字体文件
            {
                test: /\.(woff|ttf|eot|svg)$/,
                use: ["file-loader"]
            },
            // 配置 处理高级 js 的语法
            // {
            //     test: /\.js$/,
            //     use: [
            //         {
            //             loader: "babel-loader",
            //             options: {
            //                 presets: ["@babel/env"],
            //                 plugin: ["@babel/plugin-proposal-class-properties"]
            //             }
            //         }
            //     ]
            // }

            // 使用 html-withimg-loader 用来配置从html导入的图片
            {
                test: /\.(htm|html)$/i,
                loader: "html-withimg-loader"
            }
        ]
    }
}