<template>
  <div class="popxueli" id="popxuelis">
    <div class="xueli-form">
      <span @click="close">X</span>
      <h1>领取免费公开课</h1>
      <input type="text" placeholder="请输入您的微信、手机、QQ号" class="xueli-text" id="xueli-text" @input="active()">
      <button class="xueli-btn" id="xueli-btn" onclick="xueli_pop()">领取免费公开课</button>
      <p>注意: <br>尚德机构承诺，您的信息只用于为您提供更详细的<br>免费考试信息，不会对外泄露！</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$emit('closexueli')
    },
    active () {
      let TextValueLength = document.getElementById('xueli-text').value.length
      if (TextValueLength > 0) {
        document.getElementById('xueli-btn').classList.add('btn-active-o')
      } else {
        document.getElementById('xueli-btn').classList.remove('btn-active-o')
      }
    }
  }
}
</script>

<style lang="less">
.popxueli{
  position: fixed;
  width: 750px;
  height: 1334px;
  background: rgba(51, 51, 51, 0.4);
  border: #dfdbdb 2px solid;
  border-radius: 12px;
  z-index: 21;
  .xueli-form{
    position: fixed;
    width: 622px;
    height: 600px;
    background: #fff;
    border: 2px #dfdbdb solid;
    border-radius: 12px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    h1{
      font-size: 34px;
      margin-top: 88px;
    }
    span{
      float: right;
      position: absolute;
      right: 28px;
      margin-top: 24px;
      font-size: 28px;
    }
    .xueli-text{
      margin-top: 88px;
      text-align: center;
      width: 530px;
      height: 63px;
      border: 1px #333 solid;
      // border-style: none;
    }
    .xueli-btn{
      width: 530px;
      height: 63px;
      margin-top: 44px;
      background: #eee;
      border-style: none;
    }
    .btn-active-b{
      background: #00a8e1;
      color: #fff;
    }
    .btn-active-o{
      background: #f9e655;
      color: #333;
    }
    p{
      margin-top: 64px;
      font-size: 24px;
      text-align: left;
      line-height: 30px;
      width: 530px;
      margin-left: 44px;
      color: red;
    }
  }
}
</style>
