//组装模块并导出store的地方
import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./action"
Vue.use(Vuex);


const state = {
    username: "",//登录用户名
    cartCount: 0 //购物车数量
}
export default new Vuex.Store({
    state,//state存储数据
    actions,//传输数据
    mutations,//读取改变数据
});  