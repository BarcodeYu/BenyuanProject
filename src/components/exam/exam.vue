<template>
<div class="exam" id="exam">
  <div class="exam-title exam-background-b">
    <span>测一测适合您的学历提升方案</span>
  </div>
  <div class="exam-examer">
    <p style="text-align:right">测评人数:<span id="userNum">{{userNum}}</span></p>
  </div>
  <div class="exam-testing">
    <div class="exam-test" id="exam-test1">
      <h1>1.您的年龄是？</h1>
      <button id="text1_1" class="exam-button exam-button-ml10px" @click="userNumAdd" onclick="exam_text1_1()">18岁以下</button>
      <button id="text1_2" class="exam-button button-active-b" @click="userNumAdd" onclick="exam_text1_2()">18-24岁</button>
      <button id="text1_3" class="exam-button" @click="userNumAdd" onclick="exam_text1_3()">25-35岁</button>
      <button id="text1_4" class="exam-button exam-button-ml10px exam-button-mt26px" @click="userNumAdd" onclick="exam_text1_4()">35岁以上</button>
    </div>
    <div class="exam-test" id="exam-test2">
      <h1>2.您的最高学历是？</h1>
      <button id="text2_1" class="exam-button exam-button-ml10px" @click="userNumAdd" onclick="exam_text2_1()">高中以下</button>
      <button id="text2_2" class="exam-button button-active-b" @click="userNumAdd" onclick="exam_text2_2()">高中/中专</button>
      <button id="text2_3" class="exam-button" @click="userNumAdd" onclick="exam_text2_3()">大 专</button>
      <button id="text2_4" class="exam-button exam-button-ml10px exam-button-mt26px" @click="userNumAdd" onclick="exam_text2_4()">本 科</button>
    </div>
    <div class="exam-test" id="exam-test3">
      <h1>3.您毕业多久了？</h1>
      <button id="text3_1" class="exam-button exam-button-ml10px" @click="userNumAdd" onclick="exam_text3_1()">今年毕业</button>
      <button id="text3_2" class="exam-button button-active-b" @click="userNumAdd" onclick="exam_text3_2()">1-2年</button>
      <button id="text3_3" class="exam-button" @click="userNumAdd" onclick="exam_text3_3()">2-4年</button>
      <button id="text3_4" class="exam-button exam-button-ml10px exam-button-mt26px" @click="userNumAdd" onclick="exam_text3_4()">5年以上</button>
    </div>
    <div class="exam-test" id="exam-test4">
      <h1>4.您提升学历的目的是？</h1>
      <button id="text4_1" class="exam-button exam-button-ml10px" @click="userNumAdd" onclick="exam_text4_1()">落 户</button>
      <button id="text4_2" class="exam-button button-active-b" @click="userNumAdd" onclick="exam_text4_2()">找工作</button>
      <button id="text4_3" class="exam-button" @click="userNumAdd" onclick="exam_text4_3()">考公务员</button>
      <button id="text4_4" class="exam-button exam-button-ml10px exam-button-mt26px" @click="userNumAdd" onclick="exam_text4_4()">职位晋升</button>
      <button id="text4_5" class="exam-button exam-button-mt26px" @click="userNumAdd" onclick="exam_text4_5()">自我提升</button>
    </div>
    <div class="exam-test" id="exam-test5">
      <h1>5.您感兴趣的专业是？</h1>
      <button id="text5_1" class="exam-button exam-button-ml10px" @click="userNumAdd" onclick="exam_text5_1()">教育类</button>
      <button id="text5_2" class="exam-button button-active-b" @click="userNumAdd" onclick="exam_text5_2()">管理类</button>
      <button id="text5_3" class="exam-button" @click="userNumAdd" onclick="exam_text5_3()">财会类</button>
      <button id="text5_4" class="exam-button exam-button-ml10px exam-button-mt26px" @click="userNumAdd" onclick="exam_text5_4()">计算机类</button>
      <button id="text5_5" class="exam-button exam-button-mt26px" @click="userNumAdd" onclick="exam_text5_5()">外语类</button>
    </div>
    <div class="exam-input">
      <input class="exam-text" type="text" name="exam-text" id="exam-text" placeholder="请输入您的微信/QQ/电话" @input="button_active_b()">
      <button class="exam-textbutton" id="exam-textbutton" @click="userNumAdd" onclick="setexam()">提交获取测评结果</button>
      <!-- <button onclick="interactive.openNtkf(document.body,'点击内容')"></button>  小能测试按钮 -->
    </div>
  </div>
</div>
</template>

<script>
import '../../../static/js/exam_set.js' // 表单提交js
export default {
  data () {
    return {
      examSum: 0,
      userNum: this.getCookie('usernumber')
    }
  },
  mounted () {
    let hasusernumber = this.getCookie('usernumber')
    if (!hasusernumber) {
      this.setCookie('usernumber', 1329)
      // console.log('usernumber orgin number is ' + 1329)
    }
  },
  methods: {
    button_active_b () {
      let TextValueLength = document.getElementById('exam-text').value.length
      if (TextValueLength > 0) {
        document.getElementById('exam-textbutton').classList.add('button-active-b')
      } else {
        document.getElementById('exam-textbutton').classList.remove('button-active-b')
      }
    },
    button_active_o () {
      let TextValueLength = document.getElementById('exam-text').value.length
      if (TextValueLength > 0) {
        document.getElementById('exam-textbutton').classList.add('button-active-o')
      } else {
        document.getElementById('exam-textbutton').classList.remove('button-active-o')
      }
    },
    setCookie (objName, objValue, objHours) {
      var str = objName + '=' + objValue
      if (objHours > 0) { // 为0时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date()
        var ms = objHours * 3600 * 1000
        date.setTime(date.getTime() + ms)
        str += '; expires=' + date.toGMTString()
      }
      document.cookie = str
    },
    getCookie (objName) { // 获取指定名称的cookie的值
      var arrStr = '' + document.cookie
      if (!arrStr) {
        return ''
      }
      arrStr = arrStr.split(';')
      if (arrStr.length > 0) {
        var target = ''
        for (var i = 0; i < arrStr.length; i++) {
          var temp = arrStr[i].split('=')
          var name = temp[0].replace(/^\s+|\s+$/g, '')
          if (name === objName) {
            target = temp[1]
          }
        }
        return target
      }
      return ''
    },
    delCookie (name) { // 删除cookies
      var exp = new Date()
      exp.setTime(exp.getTime() - 1)
      var cval = this.getCookie(name)
      if (cval && cval !== null && cval !== 'undefined') {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
      }
    },
    userNumAdd () {
      this.userNum++
      this.setCookie('usernumber', this.userNum)
      console.log('usernumber is ' + this.getCookie('usernumber'))
    }
  }
}
</script>

<style lang="less">
.exam{
  width: 622px;
  margin: 0 auto;
  text-align: center;
  padding: 0 64px 0 64px;
  .exam-background-b{
    width: 551px;
    height: 142px;
    background: url(../../../static/images/theme_titlebackground_blue.png) no-repeat;
    background-size: 100%;
    span{
      color: #fff;
      font-size: 34px;
    }
  }
  .exam-background-o{
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
  .exam-title{
    margin: 0 auto;
    line-height: 142px;
    text-align: center;
    margin-top: 30px;
  }
  .exam-examer{
    font-size: 24px;
    margin-right: 46px;
    margin-top: 16px;
  }
  .exam-testing{
    text-align: left;
    margin-top: 20px;
    .exam-test{
      margin-bottom: 44px;
      h1{
        font-size: 28px;
        color: #ce0000;
        margin-bottom: 32px;
        &::before{
          content: '';
          width: 6px;
          height: 24px;
          background: #ce0000;
          padding-left: 6px;
          margin-right: 8px;
        }
      }
      .exam-button{
        width: 156px;
        height: 52px;
        border-radius: 8px;
        border-style: none;
        background: #eee;
        margin-left: 60px;
        font-size: 24px;
      }
      .exam-button-ml10px{
        margin-left: 10px;
      }
      .exam-button-mt26px{
        margin-top: 26px;
      }
      .button-active-b{
        background: #00a8e1;
        color: #fff;
      }
      .button-active-o{
        background: #f9e655;
        color: #333;
      }
    }
    .exam-input{
      width: 622px;
      height: 154px;
      .exam-text{
        width: 603px;
        height: 68px;
        border: 1px #333 solid;
        text-align: center;
        font-size: 24px;
      }
      .exam-textbutton{
        width: 603px;
        height: 68px;
        background: #eee;
        margin-top: 16px;
        text-align: center;
        font-size: 24px;
        border-style: none;
      }
      .button-active-b{
        background: #00a8e1;
        color: #fff;
      }
      .button-active-o{
        background: #f9e655;
        color: #333;
      }
    }
  }
}

</style>
