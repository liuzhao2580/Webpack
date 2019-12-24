// 用来配置公共的请求接口
let baseURL = ""
// 当 IS_DEV 存在的时候说明当前的环境是开发环境
if (IS_DEV) {
    baseURL = "http://192.168.10.123/api/v1"
}
// 当 IS_DEV 不存在的时候 说明当前的环境是线上的生产环境
else if (!IS_DEV) {
    baseURL = "http://baidu.com/api/v2"
}

export default baseURL