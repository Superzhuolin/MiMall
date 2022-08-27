import Vue from "vue"
import Router from "vue-router"
import Home from "./pages/home.vue"
import Index from "./pages/index.vue"
import Product from './pages/product.vue'
import Detail from './pages/detail.vue'
import Cart from './pages/cart'
import Order from './pages/order.vue'
import OrderConfirm from './pages/orderConfirm.vue'
import OrderList from './pages/orderList.vue'
import OrderPay from './pages/orderPay.vue'


Vue.use(Router);  //vue加载Router插件
//export是ES6的语法,通过此方式导入对象
export default new Router({
    //配置路由列表
    routes: [
        {
            path: '/',
            name: "home",
            component: Home,
            redirect: "/index",
            chiledren: [
                {
                    path: '/index',
                    name: "index",
                    component: Index,
                }, {
                    path: '/product/:id', //定义动态路由
                    name: "product",
                    component: Product,
                }, {
                    path: '/detail/:id', //定义动态路由
                    name: "detail",
                    component: Detail,
                },
            ]
        }, {
            path: '/cart',
            name: "cart",
            component: Cart,
        },
        {
            path: '/order',
            name: "order",
            component: Order,
            chiledren: [
                {
                    path: '/list',
                    name: "order-list",
                    component: OrderList,
                }, {
                    path: '/confirm',
                    name: "order-confirm",
                    component: OrderConfirm,
                }, {
                    path: '/pay',
                    name: "order-pay",
                    component: OrderPay,
                },
            ]
        },
    ]
});
