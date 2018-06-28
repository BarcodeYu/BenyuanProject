<template>
<div id="bar" class="bar">
  <div class="bar-menu">
    <div v-for="(item,index) in menu.data" :key="index" class="bar-name" @click="menuclick(item)">
      <!-- <img :src="item.icon" alt=""> -->
      <!-- <div :class="{'check':index==i,'lesson':isLesson,'home':isHome}" class="icon"></div> -->
      <div :class="{home:index==home,lesson:index==lesson,other:index==other,my:index==my,
      home_o:index==home_o,lesson_o:index==lesson_o,other_o:index==other_o,my_o:index==my_o}" class="icon"></div>
      <p>{{item.name}}</p>
    </div>
  </div>
</div>
</template>

<script>
// const ERR_OK = 0
export default {
  data () {
    return {
      menu: {},
      i: 0,
      isHome: true,
      isLesson: false,
      home: 'home',
      lesson: 'lesson',
      other: 'other',
      my: 'my',
      home_o: 'home',
      lesson_o: 'lesson_o',
      other_o: 'other_o',
      my_o: 'my_o'
    }
  },
  created () {
    this.$axios.get('/api/menu').then((res) => {
      this.menu = res.data
      // console.log(res.data.data.home.name)
      // console.log(this.menu.data.home)
    })
  },
  methods: {
    menuclick (index) { // 点击事件循环
      this.i = index.id
      console.log(index.id)
      // console.log(this.i)
      // console.log(index.icon)
      // console.log(index.name)
      if (this.i === 'home') {
        this.home_o = 'home'
        this.lesson_o = 'lesson_o'
        this.other_o = 'other_o'
        this.my_o = 'my_o'
        console.log(index)
      } else if (this.i === 'lesson') {
        this.home_o = 'home_o'
        this.lesson_o = 'lesson'
        this.other_o = 'other_o'
        this.my_o = 'my_o'
        console.log(index)
      } else if (this.i === 'other') {
        this.home_o = 'home_o'
        this.lesson_o = 'lesson_o'
        this.other_o = 'other'
        this.my_o = 'my_o'
        console.log(index)
      } else if (this.i === 'my') {
        this.home_o = 'home_o'
        this.lesson_o = 'lesson_o'
        this.other_o = 'other_o'
        this.my_o = 'my'
        console.log(index)
      }
    }
  }
}
</script>

<style lang="less">
.bar{
  position: fixed;
  bottom: 0;
  width: 750px;
  height: 88px;
  font-size: 24px;
  background: #fff;
  z-index: 2;
  border-top: 1px #ddd solid;
  .bar-menu{
    display: flex;
    width: 750px;
    height: 88px;
    align-items: center;
    .bar-name{
      flex: 1;
      .icon{
        display: inline-block;
        // vertical-align: middle;
        width: 36px;
        height: 36px;
      }
      .home{
        background: url(./images/home.png) no-repeat;
        background-size: 100%;
      }
      .lesson{
        background: url(./images/lesson.png) no-repeat;
        background-size: 100%;
      }
      .other{
        background: url(./images/other.png) no-repeat;
        background-size: 100%;
      }
      .my{
        background: url(./images/my.png) no-repeat;
        background-size: 100%;
      }
      .home_o{
        background: url(./images/home_o.png) no-repeat;
        background-size: 100%;
      }
      .lesson_o{
        background: url(./images/lesson_o.png) no-repeat;
        background-size: 100%;
      }
      .other_o{
        background: url(./images/other_o.png) no-repeat;
        background-size: 100%;
      }
      .my_o{
        background: url(./images/my_o.png) no-repeat;
        background-size: 100%;
      }
      .check{
        background: #f9e655;
      }
      p{
        // vertical-align: middle;
        font-size: 24px;
      }
    }
  }
}
</style>
