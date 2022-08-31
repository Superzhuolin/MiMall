<template>
  <div class="index">
    <div class="container">
      <!-- 轮播界面 -->
      <div class="swiper-box">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in swiperList" :key="index">
            <a :href="'/#/product' + item.id"><img :src="item.img" /></a>
          </swiper-slide>
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
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Swiper from "swiper";
// import "swiper/dist/css/swiper.css";
// import "swiper/css/swiper.css";

export default {
  name: "index",
  components: {
    ServiceBar,
    SwiperSlide,
    Swiper,
  },
  data() {
    return {
      swiperOption: {},
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
          img: "/public/imgs/slider/slide-5.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
// .index {
//   .swiper-box {
//     // .swiper-container {
//     //   height: 451px;
//     //   img {
//     //     width: 100%;
//     //     height: 100%;
//     //   }
//     // }
//   }
// }
</style>