<template>
  <div class="index">
    <div class="container">
      <!--主界面 -->
      <div class="swiper-box">
        <!-- 左边:导航菜单 -->
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡 </a>
              <!-- 菜单详细列表 -->
              <div class="children">
                <ul v-for="(item, i) in menuList" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a
                      :href="sub ? '/#/product/' + sub.id : ''"
                      target="_blank"
                    >
                      <img :src="sub ? sub.img : '/imgs/item-box-1.png'" />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <!-- 右边:轮播界面 -->
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in swiperList" :key="index">
            <a :href="'/#/product/' + item.id"><img :src="item.img" /></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 广告界面 -->
      <div class="abs-box">
        <a
          :href="'/#/product/' + item.id"
          v-for="(item, index) in adsList"
          :key="index"
        >
          <!-- 图片懒加载减轻前端服务器带宽压力,动态加载图片,图片未处理有默认替换图片
          通过鼠标滚动慢慢再加载出来 -->
          <img :src="item.img" alt="" />
        </a>
      </div>
      <!-- 横幅界面 -->
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" alt="" />
        </a>
      </div>
      <!-- 产品界面 -->
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
import ServiceBar from "./../components/ServiceBar.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "index",
  components: {
    ServiceBar,
    swiperSlide,
    swiper,
  },
  data() {
    return {
      swiperOption: {
        autoplay: true, //设置自动播放
        loop: true, //循环点击
        effect: "cube", //切换效果
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6,
        }, //分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }, //前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg",
        },
      ], //菜单表
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.index {
  .swiper-box {
    .nav-menu {
      // opacity: 0.7;//使用opacity会让字体也会变得透明
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      // padding: 26px 0;
      padding: 2px 0;
      background-color: #55585a7a;
      box-sizing: border-box; //定义盒子模型(保持尺寸)
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px; //设置行高
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: " ";
              //箭头无法显示
              @include bgImg(10px, 10px, "/public/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none; //默认不给看见
            width: 952px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                // width: 241px;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle; //图片和文字居中
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px; //改变右导航菜单位置
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .abs-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
}
</style>