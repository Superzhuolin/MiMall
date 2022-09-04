// 订单
<template>
  <div class="product">
    <!-- 引入产品参数组件 -->
    <product-param :title="product.name">
      <!-- v-slot:xxx（可简写为#xxx） -->
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-param>
    <div class="content">
      <div class="item-bg">
        <h2>{{ product.name }}</h2>
        <h3>{{ product.subtitle }}</h3>
        <p>
          <a href="" id="">全球首款双频 GP</a>
          <span>|</span>
          <a href="" id="">骁龙845</a>
          <span>|</span>
          <a href="" id="">AI 变焦双摄</a>
          <span>|</span>
          <a href="" id="">红外人脸识别</a>
        </p>
        <div class="price">
          <span
            >￥<em>{{ product.price }}</em></span
          >
        </div>
      </div>
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide><img src="/imgs/product/gallery-2.png" /></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-3.png" /></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-4.png" /></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-5.jpg" /></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-6.jpg" /></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <h2>60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>
          更能AI 精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <!-- 实现点击背景图片播放视频功能 -->
        <div class="video-bg" @click="showSlide = 'slideDown'"></div>
        <div class="video-box" v-show="showSlide">
          <!-- 播放视频时:阴影效果 -->
          <div class="overlay"></div>
          <!-- 视频组件 -->
          <div class="video" :class="showSlide">
            <span class="icon-close" @click="closeVideo"></span>
            <video
              src="/imgs/product/video.mp4"
              muted
              autoplay
              controls
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import ProductParam from "./../components/ProductParam";
export default {
  name: "product",
  components: {
    swiper,
    swiperSlide,
    ProductParam,
  },
  data() {
    return {
      showSlide: "", //控制动画效果
      product: {}, //商品信息
      swiperOption: {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      let id = this.$route.params.id; //获取是商品id
      this.axios.get(`/products/${id}`).then((res) => {
        this.product = res;  //获取商品详情
      });
    },
    buy() {
      let id = this.$route.params.id;
      this.$router.push(`/detail/${id}`); //跳转到商品详情页面
    },
    closeVideo(){
      //.6s后变量置为空,video-box就会隐藏掉了
      this.showSlide="slideUp";
      setTimeout(() => {
      this.showSlide="";
      }, (600));
    }
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
.product {
  .content {
    .item-bg {
      background: url("/public/imgs/product/product-bg-1.png") no-repeat center;
      height: 718px;
      text-align: center;
      h2 {
        font-size: 80px;
        padding-top: 55px;
      }
      h3 {
        font-size: 24px;
        letter-spacing: 10px;
      }
      p {
        margin-top: 21px;
        margin-bottom: 40px;
        a {
          font-size: 16px;
          color: #333333;
        }
        span {
          margin: 0 15px;
        }
      }
      .price {
        font-size: 30px;
        color: #333333;
        em {
          font-style: normal;
          font-size: 38px;
        }
      }
    }
    .item-bg-2 {
      background: url(/public/imgs/product/product-bg-2.png) no-repeat center;
      height: 480px;
      background-size: 1226px 397px;
    }
    .item-bg-3 {
      background: url(/public/imgs/product/product-bg-3.png) no-repeat center;
      height: 638px;
      background-size: cover;
    }
    .item-swiper {
      margin: 36px auto 52px;
      .desc {
        font-size: 18px;
        color: #333333;
        text-align: center;
      }
      img {
        width: 100%;
      }
    }
    .item-video {
      height: 1044px;
      background-color: #070708;
      margin-bottom: 76px;
      color: #ffffff;
      text-align: center;
      h2 {
        font-size: 60px;
        padding-top: 82px;
        margin-bottom: 47px;
      }
      p {
        font-size: 24px;
        margin-bottom: 58px;
      }
      .video-bg {
        background: url("/public/imgs/product/gallery-1.png") no-repeat center;
        background-size: cover;
        width: 1226px;
        height: 540px;
        margin: 0 auto 120px;
        cursor: pointer;
      }
      .video-box {
        .overlay {
          // 播放视频时:阴影效果
          @include position(fixed);
          background-color: #333333;
          opacity: 0.4;
          z-index: 10;
        }
        @keyframes slideDown {
          from {
            top: -50%;
            opacity: 0;
          }
          to {
            top: 50%;
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            top: 50%;
            opacity: 1;
          }
          to {
            top: -50%;
            opacity: 0;
          }
        }
        .video {
          position: fixed; //网页定位视频窗口
          top: -50%; //起初看不见,后逐渐可见
          left: 50%;
          transform: translate(-50%, -50%); //延X轴和延Y轴均移动50%
          z-index: 10;
          width: 1000px; //视频组件宽高
          height: 536px;
          opacity: 1; //起初透明,后逐渐可见
          //当他有slideDown属性时
          &.slideDown {
            animation: slideDown 0.6s linear;
            top: 50%;
          }
          &.slideUp {
            animation: slideUp 1s linear;
          }
          // 关闭图标
          .icon-close {
            position: absolute;
            top: 20px;
            right: 20px;
            @include bgImg(20px, 20px, "/public/imgs/icon-close.png");
            cursor: pointer;
            z-index: 11;
          }
          // 视频展示
          video {
            width: 100%; //让video视频宽高撑满整个父容器
            height: 100%;
            object-fit: cover; //覆盖视频原生组件的阴影(视频内容覆盖整个窗口)
            outline: none;
          }
        }
      }
    }
  }
  button {
    margin-left: 10px;
  }
}
</style>