<template>
  <div class="index">
    <div class="container">
      <!-- 轮播界面 -->
      <div class="swiper-box">
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
      <div class="abs-box"></div>
      <!-- 横幅界面 -->
      <div class="banner"></div>
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
      ],
    };
  },
};
</script>
<style lang="scss">
.index {
  .swiper-box {
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>