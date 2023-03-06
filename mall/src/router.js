import Vue from "vue"
import Router from "vue-router"
import Home from "./pages/home.vue"
import Index from "./pages/index.vue"

//export是ES6的语法,通过此方式导入对象
Vue.use(Router);  //vue加载Router插件

export default new Router({
    routes: [ //配置路由列表
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
                    // 通过require方式加载页面主键,中间数组传入要加载的页面,外面用resolve抛出
                    // 从而实现产品站的按需加载
                    // component: resolve=>require(["./pages/index.vue"],resolve),
                    component: () => import('./pages/product.vue')
                }, {
                    path: '/detail/:id',
                    name: "detail",
                    // component: resolve => require(["./pages/detail.vue"], resolve),
                    component: () => import('./pages/detail.vue')
                },
            ]
        },
        {
            path: '/login',
            name: "login",
            // component: resolve => require(["./pages/login.vue"], resolve),
            component: () => import('./pages/login.vue')
        },
        {
            path: '/cart',
            name: "cart",
            component: () => import('./pages/cart.vue')
        },
        {
            path: '/order',
            name: "order",
            component: () => import('./pages/order.vue'),
            children: [
                {
                    path: 'list',
                    name: "order-list",
                    component: () => import("./pages/orderList.vue"),
                }, {
                    path: 'confirm',
                    name: "order-confirm",
                    component: () => import("./pages/orderConfirm.vue"),
                }, {
                    path: 'pay',
                    name: "order-pay",
                    component: () => import("./pages/orderPay.vue"),
                }, {
                    path: 'alipay',
                    name: "alipay",
                    component: () => import("./pages/alipay.vue"),
                },
            ]
        },
    ]
});
