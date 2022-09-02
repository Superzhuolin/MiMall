//组装模块并导出store的地方
import Vue from "vue"
import Vuex from "Vuex"
import mutations from "./mutations"
import actions from "./action"
Vue.use(Vuex);

const state ={
    username:"",//登录用户名
    cartCount:"" //购物车数量
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})