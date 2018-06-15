<template>
  <div id="menu" class="menu">
    <div class="menu-title menu-background-o">
      <span>本次报考接受以下学历形式</span>
    </div>
    <div class="menu-selection-bg">
      <div class="menu-box menu-box-bg-o"></div>
      <div class="menu-box menu-box-bg-o"></div>
      <div class="menu-box menu-box-bg-o mr0px"></div>
      <div class="menu-box menu-box-bg-o"></div>
      <div class="menu-box menu-box-bg-o"></div>
      <div class="menu-box menu-box-bg-o mr0px"></div>
    </div>
    <div class="menu-selection">
      <div @click="openwindow()" class="menu-box menu-box-bg-o">
        <span>低学历<br>考专科</span>
      </div>
      <div @click="openwindow()" class="menu-box menu-box-bg-o">
        <span>低学历<br>考本科</span>
      </div>
      <div @click="openwindow()" class="menu-box menu-box-bg-o mr0px">
        <span>高&nbsp;中<br>考专科</span>
      </div>
      <div @click="openwindow()" class="menu-box menu-box-bg-o">
        <span>高&nbsp;中<br>考本科</span>
      </div>
      <div @click="openwindow()" class="menu-box menu-box-bg-o">
        <span>专&nbsp;科<br>考本科</span>
      </div>
      <div @click="openwindow()" class="menu-box menu-box-bg-o mr0px">
        <span>其他<br>形式</span>
      </div>

      <div class="menu-methods">
        <div class="menu-section-bg">
          <div @click="openwindow()" class="menu-section-box-bg-o menu-section-box mt0px"></div>
          <div @click="openwindow()" class="menu-section-box-bg-o menu-section-box mr0px mt0px"></div>
          <div @click="openwindow()" class="menu-section-box-bg-o menu-section-box"></div>
          <div @click="openwindow()" class="menu-section-box-bg-o menu-section-box mr0px"></div>
          <div @click="openwindow()" class="menu-section-box-bg-o menu-section-box"></div>
          <div @click="openwindow()" class="menu-section-box-bg-o menu-section-box mr0px"></div>
        </div>
        <div class="menu-section">
          <div @click="openwindow()" class="menu-section-box menu-section-box-bg-o mt0px">
            <img src="../../../static/images/theme_icon01_orange.png" alt="">
            <span>报考条件</span>
          </div>
          <div @click="openwindow()" class="menu-section-box menu-section-box-bg-o mr0px mt0px">
            <img src="../../../static/images/theme_icon02_orange.png" alt="">
            <span>报考时间</span>
          </div>
          <div @click="openwindow()" class="menu-section-box menu-section-box-bg-o">
            <img src="../../../static/images/theme_icon03_orange.png" alt="">
            <span>报考费用</span>
          </div>
          <div @click="openwindow()" class="menu-section-box menu-section-box-bg-o mr0px">
            <img src="../../../static/images/theme_icon04_orange.png" alt="">
            <span>院校专业</span>
          </div>
          <div @click="openwindow()" class="menu-section-box menu-section-box-bg-o">
            <img src="../../../static/images/theme_icon05_orange.png" alt="">
            <span>报考流程</span>
          </div>
          <div @click="openwindow()" class="menu-section-box menu-section-box-bg-o mr0px">
            <img src="../../../static/images/theme_icon06_orange.png" alt="">
            <span>政策风向</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../static/js/exam_set.js' // 表单提交js
export default {
  props: ['popVal'],
  data () {
    return {
    }
  },
  methods: {
    openwindow () {
      this.$emit('setting')
      console.log()
    }
  }
}
</script>

<style lang="less">
.menu{
  width: 622px;
  height: 1240px;
  margin-top:72px;
  padding: 64px 64px 0 64px;
  border-top: 2px #eee solid;
  .menu-title{
    margin: 0 auto;
    line-height: 142px;
    text-align: center;
    margin-top: 30px;
  }
  .menu-background-b{
    width: 551px;
    height: 142px;
    background: url(../../../static/images/theme_titlebackground_blue.png) no-repeat;
    background-size: 100%;
    span{
      color: #fff;
      font-size: 34px;
    }
  }
  .menu-background-o{
    width: 551px;
    height: 142px;
    background: url(../../../static/images/theme_titlebackground_orange.png) no-repeat;
    background-size: 100%;
    span{
      color: #333;
      font-size: 34px;
      // font-weight: 700;
    }
  }
  .menu-selection{
    width: 622px;
    position: absolute;
    margin-bottom: 64px;
    .menu-box-bg-b{
      background: #00a8e1;
      span{
        color: #fff;
      }
    }
    .menu-box-bg-o{
      background: #f9e655;
      span{
        color: #333;
      }
    }
    .menu-box{
      display: inline-block;
      width: 180px;
      height: 150px;
      margin-top: 34px;
      margin-right: 30px;
      border-radius: 16px;
      span{
        display: table;
        width: 180px;
        height: 150px;
        margin-top: 24%;
        line-height: 34px;
      }
    }
    .mr0px{
      margin-right: 0px;
    }
  }
  .menu-selection-bg{
    margin: -10px 0 0 10px;
    width: 622px;
    position: absolute;
    .menu-box-bg-b{
      background: #75d1f0;
    }
    .menu-box-bg-o{
      background: #ffd07f;
    }
    .menu-box{
      display: inline-block;
      width: 180px;
      height: 150px;
      margin-top: 34px;
      margin-right: 30px;
      border-radius: 16px;
    }
    .mr0px{
      margin-right: 0px;
    }
  }
  .menu-methods{
    margin-top: 88px;
    width: 562px;
    height: 498px;
    border: 2px solid #0086cf;
    border-radius: 12px;
    padding: 36px 30px 36px 30px;
    .menu-section{
      position: absolute;
      width: 562px;
      height: 498px;
      .menu-section-box-bg-b{
        background: #55c4e9;
        span{
          color: #fff;
        }
      }
      .menu-section-box-bg-o{
        background: #f9e655;
        span{
          color: #333;
        }
      }
      .menu-section-box{
        display: inline-block;
        width: 266px;
        height: 140px;
        border-radius: 8px;
        margin-right: 20px;
        margin-top: 34px;
        line-height: 140px;
        vertical-align: middle;
        img{
          width: 80px;
          vertical-align: middle;
        }
        span{
          margin-left: 10px;
          font-size: 26px;
        }
      }
      .mr0px{
        margin-right: 0;
      }
      .mt0px{
        margin-top: 0;
      }
    }
    .menu-section-bg{
      position: absolute;
      margin: -10px 0 0 10px;
      width: 562px;
      height: 498px;
      .menu-section-box-bg-o{
        background: #ffd07f;
      }
      .menu-section-box{
        display: inline-block;
        width: 266px;
        height: 140px;
        border-radius: 8px;
        margin-right: 20px;
        margin-top: 34px;
      }
      .mr0px{
        margin-right: 0;
      }
      .mt0px{
        margin-top: 0;
      }
    }
  }

}
</style>
