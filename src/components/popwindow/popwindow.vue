<template>
  <div class="popwindow" id="popwindows">
    <div class="pop-form">
      <span @click="close">X</span>
      <h1>领取本期报考资料</h1>
      <input type="text" placeholder="请输入您的微信、手机、QQ号" class="pop-text" id="pop-text" @input="active_o()">
      <button class="pop-btn" id="pop-btn" onclick="setexam_pop()">领取本期报考资料</button>
      <p>注意: <br>尚德机构承诺，您的信息只用于为您提供更详细的<br>免费考试信息，不会对外泄露！</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$emit('closewindows')
    },
    active_b () {
      let TextValueLength = document.getElementById('pop-text').value.length
      if (TextValueLength > 0) {
        document.getElementById('pop-btn').classList.add('btn-active-b')
      } else {
        document.getElementById('pop-btn').classList.remove('btn-active-b')
      }
    },
    active_o () {
      let TextValueLength = document.getElementById('pop-text').value.length
      if (TextValueLength > 0) {
        document.getElementById('pop-btn').classList.add('btn-active-o')
      } else {
        document.getElementById('pop-btn').classList.remove('btn-active-o')
      }
    }
  }
}
</script>

<style lang="less">
.popwindow{
  position: fixed;
  width: 750px;
  height: 1334px;
  background: rgba(51, 51, 51, 0.4);
  border: #dfdbdb 2px solid;
  border-radius: 12px;
  z-index: 21;
  .pop-form{
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
    .pop-text{
      margin-top: 88px;
      text-align: center;
      width: 530px;
      height: 63px;
      border: 1px #333 solid;
      // border-style: none;
    }
    .pop-btn{
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
