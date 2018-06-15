<template>
  <div id="header" class="header">
    <div class="header-title" id="header-title">
      <div class="header-back" onclick="window.history.go(-1)"></div>
      <h1>尚德机构学历培训报名中心</h1>
      <div class="header-talk" @click="openwindow()"></div>
    </div>
    <!-- <div class="header-background blur"></div> -->
    <div class="header-banner" @click="openpopxueli()">
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll) // 监听获取滚动值
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      if (scrollTop > 170) {
        document.getElementById('header-title').style.background = 'rgba(239,239,239,0.8)'
      } else {
        document.getElementById('header-title').style.background = 'rgba(239,239,239,0.0)'
      }
    },
    openwindow () {
      this.$emit('setting')
      console.log()
    },
    openpopxueli () {
      this.$emit('xueli')
    }
  }
}
</script>

<style lang="less">
.header{
  width: 750px;
  height: 400px;
  .header-title{
    position: fixed;
    width: 750px;
    height: 94px;
    line-height: 94px;
    vertical-align: middle;
    z-index: 20;
    h1{
      width: 622px;
      font-size: 34px;
      display: inline-block;
      vertical-align: middle;
    }
    .header-back{
      display: inline-block;
      width: 17px;
      height: 30px;
      background: url(images/header-back.png) no-repeat;
      background-size: 100%;
      text-align: left;
      vertical-align: middle;
    }
    .header-talk{
      display: inline-block;
      width: 47px;
      height: 39px;
      background: url(images/header-talk.png) no-repeat;
      background-size: 100%;
      text-align: left;
      vertical-align: middle;
    }
  }
  .header-banner{
    width: 750px;
    height: 400px;
    background: url(images/lby20180530-banner01.jpg) no-repeat;
    background-size: 100%;
  }
}
</style>
