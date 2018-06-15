// 数值初始化
let examSum = 0 
interactive.init('xiaoneng')

// cookie 初始化
function getCookie(objName) {//获取指定名称的cookie的值
  var arrStr = "" + document.cookie;
  if (!arrStr) {
    return "";
  }
  arrStr = arrStr.split(";");
  if (arrStr.length > 0) {
    var target = '';
    for (var i = 0; i < arrStr.length; i++) {
      var temp = arrStr[i].split("=");
      var name = temp[0].replace(/^\s+|\s+$/g, "");
      if (name == objName) {
        target = temp[1];
      }
    }
    return target
  }
  return ""
}

function setCookie(objName, objValue, objHours) {
  var str = objName + "=" + objValue;
  if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
    var date = new Date();
    var ms = objHours * 3600 * 1000;
    date.setTime(date.getTime() + ms);
    str += "; expires=" + date.toGMTString();
  }
  document.cookie = str;
}

function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval && cval !== null && cval !== 'undefined') {
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
}

// 点击按钮
function exam_text1_1() {
  document.getElementById('text1_1').classList.add('button-active-b')
  document.getElementById('text1_2').classList.remove('button-active-b')
  document.getElementById('text1_3').classList.remove('button-active-b')
  document.getElementById('text1_4').classList.remove('button-active-b')
}
function exam_text1_2() {
  document.getElementById('text1_2').classList.add('button-active-b')
  document.getElementById('text1_1').classList.remove('button-active-b')
  document.getElementById('text1_3').classList.remove('button-active-b')
  document.getElementById('text1_4').classList.remove('button-active-b')
}
function exam_text1_3() {
  document.getElementById('text1_3').classList.add('button-active-b')
  document.getElementById('text1_2').classList.remove('button-active-b')
  document.getElementById('text1_1').classList.remove('button-active-b')
  document.getElementById('text1_4').classList.remove('button-active-b')
}
function exam_text1_4() {
  document.getElementById('text1_4').classList.add('button-active-b')
  document.getElementById('text1_2').classList.remove('button-active-b')
  document.getElementById('text1_3').classList.remove('button-active-b')
  document.getElementById('text1_1').classList.remove('button-active-b')
}
function exam_text2_1() {
  document.getElementById('text2_1').classList.add('button-active-b')
  document.getElementById('text2_2').classList.remove('button-active-b')
  document.getElementById('text2_3').classList.remove('button-active-b')
  document.getElementById('text2_4').classList.remove('button-active-b')
  examSum = 1
  console.log(examSum)
}
function exam_text2_2() {
  document.getElementById('text2_2').classList.add('button-active-b')
  document.getElementById('text2_1').classList.remove('button-active-b')
  document.getElementById('text2_3').classList.remove('button-active-b')
  document.getElementById('text2_4').classList.remove('button-active-b')
  examSum = 1
  console.log(examSum)
}
function exam_text2_3() {
  document.getElementById('text2_3').classList.add('button-active-b')
  document.getElementById('text2_2').classList.remove('button-active-b')
  document.getElementById('text2_1').classList.remove('button-active-b')
  document.getElementById('text2_4').classList.remove('button-active-b')
  examSum = 2
  console.log(examSum)
}
function exam_text2_4() {
  document.getElementById('text2_4').classList.add('button-active-b')
  document.getElementById('text2_2').classList.remove('button-active-b')
  document.getElementById('text2_3').classList.remove('button-active-b')
  document.getElementById('text2_1').classList.remove('button-active-b')
  examSum = 3
  console.log(examSum)
}
function exam_text3_1() {
  document.getElementById('text3_1').classList.add('button-active-b')
  document.getElementById('text3_2').classList.remove('button-active-b')
  document.getElementById('text3_3').classList.remove('button-active-b')
  document.getElementById('text3_4').classList.remove('button-active-b')
}
function exam_text3_2() {
  document.getElementById('text3_2').classList.add('button-active-b')
  document.getElementById('text3_1').classList.remove('button-active-b')
  document.getElementById('text3_3').classList.remove('button-active-b')
  document.getElementById('text3_4').classList.remove('button-active-b')
}
function exam_text3_3() {
  document.getElementById('text3_3').classList.add('button-active-b')
  document.getElementById('text3_2').classList.remove('button-active-b')
  document.getElementById('text3_1').classList.remove('button-active-b')
  document.getElementById('text3_4').classList.remove('button-active-b')
}
function exam_text3_4() {
  document.getElementById('text3_4').classList.add('button-active-b')
  document.getElementById('text3_2').classList.remove('button-active-b')
  document.getElementById('text3_3').classList.remove('button-active-b')
  document.getElementById('text3_1').classList.remove('button-active-b')
}
function exam_text4_1() {
  document.getElementById('text4_1').classList.add('button-active-b')
  document.getElementById('text4_2').classList.remove('button-active-b')
  document.getElementById('text4_3').classList.remove('button-active-b')
  document.getElementById('text4_4').classList.remove('button-active-b')
  document.getElementById('text4_5').classList.remove('button-active-b')
}
function exam_text4_2() {
  document.getElementById('text4_2').classList.add('button-active-b')
  document.getElementById('text4_1').classList.remove('button-active-b')
  document.getElementById('text4_3').classList.remove('button-active-b')
  document.getElementById('text4_4').classList.remove('button-active-b')
  document.getElementById('text4_5').classList.remove('button-active-b')
}
function exam_text4_3() {
  document.getElementById('text4_3').classList.add('button-active-b')
  document.getElementById('text4_2').classList.remove('button-active-b')
  document.getElementById('text4_1').classList.remove('button-active-b')
  document.getElementById('text4_4').classList.remove('button-active-b')
  document.getElementById('text4_5').classList.remove('button-active-b')
}
function exam_text4_4() {
  document.getElementById('text4_4').classList.add('button-active-b')
  document.getElementById('text4_2').classList.remove('button-active-b')
  document.getElementById('text4_3').classList.remove('button-active-b')
  document.getElementById('text4_5').classList.remove('button-active-b')
  document.getElementById('text4_1').classList.remove('button-active-b')
}
function exam_text4_5() {
  document.getElementById('text4_5').classList.add('button-active-b')
  document.getElementById('text4_2').classList.remove('button-active-b')
  document.getElementById('text4_3').classList.remove('button-active-b')
  document.getElementById('text4_4').classList.remove('button-active-b')
  document.getElementById('text4_1').classList.remove('button-active-b')
}
function exam_text5_1() {
  document.getElementById('text5_1').classList.add('button-active-b')
  document.getElementById('text5_2').classList.remove('button-active-b')
  document.getElementById('text5_3').classList.remove('button-active-b')
  document.getElementById('text5_4').classList.remove('button-active-b')
  document.getElementById('text5_5').classList.remove('button-active-b')
}
function exam_text5_2() {
  document.getElementById('text5_2').classList.add('button-active-b')
  document.getElementById('text5_1').classList.remove('button-active-b')
  document.getElementById('text5_3').classList.remove('button-active-b')
  document.getElementById('text5_4').classList.remove('button-active-b')
  document.getElementById('text5_5').classList.remove('button-active-b')
}
function exam_text5_3() {
  document.getElementById('text5_3').classList.add('button-active-b')
  document.getElementById('text5_2').classList.remove('button-active-b')
  document.getElementById('text5_1').classList.remove('button-active-b')
  document.getElementById('text5_4').classList.remove('button-active-b')
  document.getElementById('text5_5').classList.remove('button-active-b')
}
function exam_text5_4() {
  document.getElementById('text5_4').classList.add('button-active-b')
  document.getElementById('text5_2').classList.remove('button-active-b')
  document.getElementById('text5_3').classList.remove('button-active-b')
  document.getElementById('text5_5').classList.remove('button-active-b')
  document.getElementById('text5_1').classList.remove('button-active-b')
}
function exam_text5_5() {
  document.getElementById('text5_5').classList.add('button-active-b')
  document.getElementById('text5_2').classList.remove('button-active-b')
  document.getElementById('text5_3').classList.remove('button-active-b')
  document.getElementById('text5_4').classList.remove('button-active-b')
  document.getElementById('text5_1').classList.remove('button-active-b')
}
function setexam() {
  let hasSendPhone = getCookie('sunlandPhone')
  console.log("cookies is " + hasSendPhone)
  let wechat = document.getElementById('exam-text').value
  if (document.getElementById('exam-text').value.length === 0) {
    
  } else if (hasSendPhone) {
    let c = confirm('你已经提交过了，是否重新提交？')
    if (c = true) {
      switch (examSum) {
        case 0:
          alert('您的测试结果是建议考取大专学历')
          break
        case 1:
          alert('您的测试结果是建议考取大专学历')
          break
        case 2:
          alert('您的测试结果是建议考取本科学历')
          break
        case 3:
          alert('您的测试结果是建议考取研究生学历')
          break
      }
      alert('提交成功，稍后会有专业的学习规划师给您进行专业的学历提升讲解')
      setCookie('sunlandPhone', wechat, 24000)
      interactive.submitMsg(wechat, 'wechat', wechat, '留言发起') //留言发起
      document.getElementById('exam-text').value = ''
    } else {
      document.getElementById('exam-text').value = ''
    }
  } else {
    switch (examSum) {
      case 0:
        alert('您的测试结果是建议考取大专学历')
        break
      case 1:
        alert('您的测试结果是建议考取大专学历')
        break
      case 2:
        alert('您的测试结果是建议考取本科学历')
        break
      case 3:
        alert('您的测试结果是建议考取研究生学历')
        break
    }
    alert('提交成功，稍后会有专业的学习规划师给您进行专业的学历提升讲解')
    setCookie('sunlandPhone', wechat, 24000)
    interactive.submitMsg(wechat, 'wechat', wechat, '留言发起') //留言发起
    document.getElementById('exam-text').value = ''
  }
}

function setexam_pop() {
  let hasSendPhone = getCookie('sunlandPhone')
  console.log("cookies is " + hasSendPhone)
  let wechat = document.getElementById('pop-text').value
  if (document.getElementById('pop-text').value.length === 0) {
    
  } else if (hasSendPhone) {
    let c = confirm('你已经提交过了，是否重新提交？')
    if (c = true) {
      alert('测评之后有专业学历规划师针对您个人的情况，给您提供详细解答')
      setCookie('sunlandPhone', wechat, 24000)
      interactive.submitMsg(wechat, 'wechat', wechat, '留言发起') //留言发起
      document.getElementById('pop-text').value = ''
    } else {
      document.getElementById('pop-text').value = ''
    }
  } else {
    alert('测评之后有专业学历规划师针对您个人的情况，给您提供详细解答')
  }
  setCookie('sunlandPhone', wechat, 24000)
  interactive.submitMsg(wechat, 'wechat', wechat, '留言发起') //留言发起
  document.getElementById('pop-text').value = ''
}

function setexam_sale () {
  let hasSendPhone = getCookie('sunlandPhone')
  console.log("cookies is " + hasSendPhone)
  let wechat = document.getElementById('sale-text').value
  // let haswechat = interactive.submitMsg(wechat, 'wechat', wechat, '留言发起')
  if (document.getElementById('sale-text').value.length === 0) {

  } /* else if (hasSendPhone) {
    let c = confirm('你已经提交过了，是否重新提交？')
    if (c = true) {
      alert('测评之后有专业学历规划师针对您个人的情况，给您提供详细解答')
      setCookie('sunlandPhone', wechat, 24000)
      interactive.submitMsg(wechat, 'wechat', wechat, '留言发起') //留言发起
      document.getElementById('sale-text').value = ''
    } else {
      document.getElementById('sale-text').value = ''
    }
  } */else {
    interactive.submitMsg(wechat, 'wechat', wechat, '留言发起') //留言发起
    alert('领取福利成功，待会将会有咨询师发放福利通知您')
    let haswechat = interactive.submitMsg(wechat, 'wechat', wechat, '留言发起')
    if (haswechat = true) {
      setCookie('sunlandPhone', wechat, 24000)
      console.log('留言成功')
    }
  }
  document.getElementById('sale-text').value = ''
}

function xueli_pop() {
  let hasSendPhone = getCookie('sunlandPhone')
  console.log("cookies is " + hasSendPhone)
  let wechat = document.getElementById('xueli-text').value
  if (document.getElementById('xueli-text').value.length === 0) {

  } else if (hasSendPhone) {
    let c = confirm('你已经提交过了，是否重新提交？')
    if (c = true) {
      alert('测评之后有专业学历规划师针对您个人的情况，给您提供详细解答')
      setCookie('sunlandPhone', wechat, 24000)
      interactive.submitMsg(wechat, 'wechat', wechat, '留言发起') //留言发起
      document.getElementById('xueli-text').value = ''
    } else {
      document.getElementById('xueli-text').value = ''
    }
  } else {
    alert('测评之后有专业学历规划师针对您个人的情况，给您提供详细解答')
  }
  setCookie('sunlandPhone', wechat, 24000)
  interactive.submitMsg(wechat, 'wechat', wechat, '留言发起') //留言发起
  document.getElementById('xueli-text').value = ''
}