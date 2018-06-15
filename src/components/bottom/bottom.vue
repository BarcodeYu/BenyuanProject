<template>
  <div class="bottom" id="bottom">
    <div class="bottom-title bottom-background-o">
      <span>热门专业一览</span>
    </div>
    <!-- 滚动banner -->
    <div class="banner">
      <swiper :options="swiperOption" class="swiper-radius">
        <swiper-slide>
          <img @click="openwindow()" class="bottom-banner-img" src="../../../static/images/20180530lby-bottomBanner01.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img @click="openwindow()" class="bottom-banner-img" src="../../../static/images/20180530lby-bottomBanner02.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img @click="openwindow()" class="bottom-banner-img" src="../../../static/images/20180530lby-bottomBanner03.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="jc"></div>
    </div>
    <div class="bottom-gif" @click="opensale()">
      <img src="../../../static/images/180118lzz_page2favourable.gif" alt="">
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        direction: 'horizontal',
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        loop: true,
        setWrapperSize: true,
        slidesPerView: 1,
        spaceBetween: -50,
        centeredSlides: true,
        initialSlide: 1,
        loopAdditionalSlides: 1,
        autoplay: {
          delay: 1800
        },
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        }
      }
    }
  },
  methods: {
    openwindow () {
      this.$emit('setting')
      console.log()
    },
    opensale () {
      this.$emit('onsale')
      console.log()
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less">
.bottom{
  width: 750px;
  // height: 1240px;
  margin-top:72px;
  // padding: 64px 64px 0 64px;
  border-top: 2px #eee solid;
  margin: 0 auto;
  .bottom-title{
    margin: 0 auto;
    line-height: 142px;
    text-align: center;
    margin-top: 30px;
  }
  .bottom-background-o{
    width: 551px;
    height: 142px;
    background: url(../../../static/images/theme_titlebackground_orange.png) no-repeat;
    background-size: 100%;
    span{
      color: #333;
      font-size: 34px;
    }
  }
  .bottom-background-b{
    width: 551px;
    height: 142px;
    background: url(../../../static/images/theme_titlebackground_blue.png) no-repeat;
    background-size: 100%;
    span{
      color: #fff;
      font-size: 34px;
    }
  }
  .banner{
    margin-top: 64px;
  }
  .bottom-banner-img{
    width: 622px;
    height: 300px;
    border-radius: 16px;
  }
  .swiper-radius{
    border-radius: 8px;
  }
  .bottom-gif{
    margin-top: 88px;
    // bottom: 0;
    width: 750px;
    height: 250px;
    img{
      width: 100%;
    }
  }
}
</style>
