import Vue from 'vue'
import router from './router'
import axious from "axios"
import App from "vue-axios"  //作用域对象挂载到vue实例中
import App from './App.vue'  //主键
import VueAxios from 'vue-axios'
import { axios } from 'vue/types/umd'

// 为发请求时设置基础值
//根据前端的跨域方式做调整  (接口代理  前端域名跟接口域名是一样的)
axios.defaults.baseURL="/api";  // /a/b  :/api/a/b=>/a/b
axios.defaults.timeout=8000;  //设置超出时间

//接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;//取到的接口值
  if(res.status == 0){ //状态码为0代表成功
    return res.data;//接口返回值
  } else if (res.status == 10) {  //状态码为10代表未登录
    //main.js中无法用路由跳转页面,因为路由挂载在vue实例中
     window.location.href = "/#/login" //跳转到登录页面
  }else{
    alert(res.msg);
  }
})

Vue.use(VueAxios, axios);  //加载插件
Vue.config.productionTip = false  //生产环境提示

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
