// devServer={
//     public: '192.1.2.153',
//         port: '8080',
//         index: 'homework.html',
//         proxy: {
//         "/api": {
//             target: "http://192.1.2.74:8081/edu/",
//                 pathRewrite: {
//                 "^/api": ""
//             },
//             ws: true,
//                 changeOrigin: true
//         }
//     }
// }
devServer = { // 环境配置
    host: '0.0.0.0',
    public: '172.20.3.3:8080',
    port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    open: true // 配置自动启动浏览器
}
