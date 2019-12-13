const path = require('path')
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
    mode: "production"
}