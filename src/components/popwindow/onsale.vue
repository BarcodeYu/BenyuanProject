<template>
  <div class="onsale" id="onsale">
    <div class="sale-form">
      <div class="sale-top"></div>
      <span @click="close">X</span>
      <h1>领取优惠券</h1>
      <input type="text" placeholder="请输入您的微信、手机、QQ号" class="sale-text" id="sale-text" @input="active_o()">
      <button class="sale-btn" id="sale-btn" onclick="setexam_sale()">领取优惠券</button>
      <p>注意: <br>尚德机构承诺，您的信息只用于为您提供更详细的<br>免费考试信息，不会对外泄露！</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$emit('closesale')
    },
    active_b () {
      let TextValueLength = document.getElementById('sale-text').value.length
      if (TextValueLength > 0) {
        document.getElementById('sale-btn').classList.add('btn-active-b')
      } else {
        document.getElementById('sale-btn').classList.remove('btn-active-b')
      }
    },
    active_o () {
      let TextValueLength = document.getElementById('sale-text').value.length
      if (TextValueLength > 0) {
        document.getElementById('sale-btn').classList.add('btn-active-o')
      } else {
        document.getElementById('sale-btn').classList.remove('btn-active-o')
      }
    }
  }
}
</script>

<style lang="less">
.onsale{
  position: fixed;
  width: 750px;
  height: 1334px;
  background: rgba(51, 51, 51, 0.4);
  border: #dfdbdb 2px solid;
  border-radius: 12px;
  z-index: 21;
  .sale-form{
    position: fixed;
    width: 622px;
    height: 600px;
    background: #f66b44;
    // border: 2px #dfdbdb solid;
    border-radius: 12px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .sale-top{
      position: absolute;
      width: 622px;
      height: 200px;
      border-radius: 12px 12px 311px 311px;
      background: #f54741;
      z-index: -1;
    }
    h1{
      font-size: 64px;
      margin-top: 88px;
      color: #fbe244;
      font-weight: 700;
    }
    span{
      float: right;
      position: absolute;
      right: 28px;
      margin-top: 24px;
      font-size: 28px;
      color: #fff;
    }
    .sale-text{
      margin-top: 100px;
      text-align: center;
      width: 530px;
      height: 63px;
      // border: 1px #333 solid;
      // border-style: none;
    }
    .sale-btn{
      width: 530px;
      height: 63px;
      margin-top: 44px;
      background: #eee;
      border-style: none;
    }
    .btn-active-o{
      background: #fbe244;
      color: #333;
    }
    .btn-active-b{
      background: #00a8e1;
      color: #333;
    }
    p{
      margin-top: 64px;
      font-size: 24px;
      text-align: left;
      line-height: 30px;
      width: 530px;
      margin-left: 44px;
      color: #eee;
    }
  }
}
</style>
