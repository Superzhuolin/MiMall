import Vue from 'vue'
import router from './router'
import axios from "axios"
import VueAxios from "vue-axios"  //把axios对象挂载到vue实例中
import VueLazyLoad from 'vue-lazyload'  //懒加载
import VueCookie from 'vue-cookie'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //只需引入一次
import store from './store/index'  //默认读取里面的index.js
import App from './App.vue'  //主键
//import env from "./env"  //  ./表示当前目录 若没有会被当成插件

const mock = false;//mock开关
if (mock) {
  require("./mock/api");
}

// 为发请求时设置基础值
//1.根据前端的跨域方式做调整  (接口代理  前端域名跟接口域名是一样的)
// /a/b  :/api/a/b=>/a/b
// axios.defaults.baseURL = " https://mock.mengxuegu.com/mock/630c3a1bc94098684fb183bd/api"; 
axios.defaults.baseURL = " /api";
axios.defaults.timeout = 8000;  //设置超出时间
//3.根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

//接口错误拦截 
axios.interceptors.response.use(function (response) {  
  let res = response.data;//取到的接口值
  let path = location.hash;//获取哈希路由地址
  if (res.status == 0) { //状态码为0代表成功
    return res.data;//接口返回值
  } else if (res.status == 10) {  //状态码为10代表未登录
    //main.js中无法用路由跳转页面,因为路由挂载在vue实例中
    if (path != "#/index") {//浏览非主页 会跳转到登录页面
      window.location.href = "/#/login" 
    }
    return Promise.reject(res);     //返回promise错误状态
  } else {
    Message.warning(res.msg);
    return Promise.reject(res);     //返回promise错误状态
  }
}, (error) => {//error是http状态码的拦截请求  
    let res = error.response;
    Message.error(res.data.message);
    return Promise.reject(error);     
})

Vue.use(VueAxios, axios);  //加载插件
Vue.use(VueCookie);  //加载插件
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});  //加载懒加载插件
Vue.prototype.$message=Message;//使用对象方式扩展uL插件
Vue.config.productionTip = false;  //生产环境提示

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
