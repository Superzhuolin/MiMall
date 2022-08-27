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
            //问题:无法显示子级index内容(页面空白)
            // 所以你现在能够展示内容吗,我已经注释了
            //你把index删了,当然展示不了index啊
            // redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: "index",
                    component: Index,
                }, {
                    path: '/product/:id', //定义动态路由
                    name: "product",
                    component: Product,
                }, {
                    path: '/detail/:id',
                    name: "detail",
                    component: Detail,
                },
            ]
        },//同级可以显示
        // {
        //     path: '/index',
        //     name: "index",
        //     component: Index,
        // },
        {
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
