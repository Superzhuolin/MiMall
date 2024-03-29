let baseURL; 
switch (process.env.NODE_ENV) {  //获取node.js进程里面的环境变量
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api'
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api'
        break;
    case 'prev':
        baseURL = 'http://prev-mall-pre.springboot.cn/api'
        break;
    case 'production':
        baseURL = 'http://mall-pre.springboot.cn/api'
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api'
        break;
}
export default{
    baseURL, 
}