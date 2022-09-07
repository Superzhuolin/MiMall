<template>
  <div class="header">
    <!-- 顶部栏 -->
    <div class="nav-topbar">
      <div class="container">
        <!-- 左边栏 -->
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <!-- 右边栏:登录  订单 -->
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="javascript:;" @click="goToCart" class="my-cart">
            <!-- 购物车图标 -->
            <span class="icon-cart"></span>
            购物车({{ cartCount }})
          </a>
        </div>
      </div>
    </div>

    <!-- 导航栏 -->
    <div class="nav-header">
      <div class="container">
        <!-- logo -->
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <!-- 小米手机 -->
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- RemMi红米手机 -->
          <div class="item-menu">
            <span>RemMi红米手机</span>
          </div>
          <!-- 电视 -->
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <!-- <img src="../../public/imgs/nav-img/nav-1.png" alt="读取失败" /> -->
                      <img
                        v-lazy="'/imgs/nav-img//nav-3-1.jpg'"
                        alt="读取失败"
                      />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'imgs/nav-img/nav-3-2.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米全面屏电视</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'imgs/nav-img/nav-3-3.png'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'imgs/nav-img/nav-3-4.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'imgs/nav-img/nav-3-5.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'imgs/nav-img/nav-3-6.png'" alt="" />
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">小米电视</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: [],
    };
  },
  computed: {
    // 解决延迟问题:username发生变化时会重新计算一次
    // username() {
    //   return this.$store.state.username; //读取后共享:获取到axios后,读取数据(用户名)
    // },
    // cartCount() {
    //   return this.$store.state.cartCount;
    // },
    ...mapState(["username", "cartCount"]),
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    },
  },
  mounted() {
    this.getProductlist();
    let params = this.$route.params;
    if(params && params.from =="login"){//从购物车过来订单
      this.getCartCount();
    }
  },
  methods: {
    login() {
      this.$router.push("/login"); //跳转登录
    },
    getProductlist() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            // pageSize:6,//一页展示六条数据
          },
        })
        .then((res) => {
          // if (res.list.length >= 6) {
          //   this.phoneList = res.list.slice(0, 6);
          // }
          this.phoneList = res.list;
        });
    },  
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
        this.$store.dispatch("saveCartCount", res); //刷新后再次保存用户名
      });
    },
    //退出
    logout(){
        this.axios.post("/user/logout").then(() => {
          this.$message.success("退出成功");
          this.$cookie.set("userId","",{expires:"-1"});  //使cookie中的ueseId即刻过期
          this.$store.dispatch("saveUserName","");// 把vuex中的username数据清空
          this.$store.dispatch("saveCartCount", "0"); //把购物车数量清空

        }); 
    },
    goToCart() {
      this.$router.push("/cart"); //跳转购物车
    },
  },
};
</script> 
<style lang="scss">
@import "/src/assets/scss/base.scss";
@import "/src/assets/scss/mixin.scss";
@import "/src/assets/scss/config.scss";
.header {
  // 顶部栏
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        //购物车
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        margin-right: 0;
        .icon-cart {
          @include bgImg(16px, 12px, "/public/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  //导航栏
  .nav-header {
    .container {
      height: 112px;
      position: relative;
      @include flex();
      
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer; //鼠标带手
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1; //移动展示
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: height 0.5s; //控制高度做动画
            background-color: #ffffff; //设置背景色为白色,避免被其他颜色覆盖

            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center; //文字图片居中
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: " ";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          // justify-content: space-between;//水平居中
          align-items: center; //垂直居中
          input {
            border: none;
            box-sizing: border-box; //使padding和border不会在影响元素宽高
            border-right: 1px solid #e0e0e0; //设置右边线
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, "/public/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
