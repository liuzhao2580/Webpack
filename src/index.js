// ES6 的导入规范
// import name from "./name"

// CommonJS 的导入规范
const name = require("./name")
const baseURL = require("./assest/js/API_config.js")
// 导入 less 
import './less/index.less'

//导入 scss 文件
import "./sass/index.scss"
console.log(name)
console.log(baseURL)