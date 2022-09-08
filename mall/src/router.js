import Vue from "vue"
import Router from "vue-router"
import Home from "./pages/home.vue"
// import Login from "./pages/login.vue"
import Index from "./pages/index.vue"
// import Product from './pages/product.vue'
// import Detail from './pages/detail.vue'
import Cart from './pages/cart'
// import Order from './pages/order.vue'
import OrderConfirm from './pages/orderConfirm.vue'
// import OrderList from './pages/orderList.vue'
import OrderPay from './pages/orderPay.vue'
import AliPay from './pages/alipay.vue'
// import { resolve } from "core-js/fn/promise"

Vue.use(Router);  //vue加载Router插件
//export是ES6的语法,通过此方式导入对象
export default new Router({
    //配置路由列表
    routes: [
        {
            path: '/',
            name: "home",
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: "index",
                    component: Index,
                }, {
                    path: '/product/:id', //定义动态路由
                    name: "product",
                    // component: Product,
                    // 通过require方式加载页面主键,中间数组传入要加载的页面,外面用resolve抛出
                    // 从而实现产品站的按需加载
                    // component: resolve=>require(["./pages/index.vue"],resolve),
                    component: () => import('./pages/product.vue')
                }, {
                    path: '/detail/:id',
                    name: "detail",
                    // component: Detail,
                    // component: resolve => require(["./pages/detail.vue"], resolve),
                    component: () => import('./pages/detail.vue')
                },
            ]
        },
        {
            path: '/login',
            name: "login",
            // component: Login,
            // component: resolve => require(["./pages/login.vue"], resolve),
            component: () => import('./pages/login.vue')
        },
        {
            path: '/cart',
            name: "cart",
            // component: Cart,
            component: () => import('./pages/cart.vue')
        },
        {
            path: '/order',
            name: "order",
            // component: Order,
            component: () => import('./pages/order.vue'),
            children: [
                {
                    path: 'list',
                    name: "order-list",
                    // component: OrderList,
                    component: () => import("./pages/orderList.vue"),
                }, {
                    path: 'confirm',
                    name: "order-confirm",
                    component: OrderConfirm,
                }, {
                    path: 'pay',
                    name: "order-pay",
                    component: OrderPay,
                }, {
                    path: 'alipay',
                    name: "alipay",
                    component: AliPay,
                },
            ]
        },
    ]
});
