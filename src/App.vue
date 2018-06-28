<template>
  <div id="app">
    <v-popwindow v-if="istrue" @closewindows="closewindows"></v-popwindow>
    <v-onsale v-if="issale" @closesale="closesale"></v-onsale>
    <v-popxueli  v-if="isxueli"  @closexueli="closexueli"></v-popxueli>
    <v-header @setting="getting" @xueli="xueli"></v-header>
    <v-exam></v-exam>
    <v-menu @setting="getting"></v-menu>
    <v-bottom @setting="getting" @onsale="opensale"></v-bottom>
    <v-bar></v-bar>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import exam from './components/exam/exam.vue'
import menu from './components/menu/menu.vue'
import bottom from './components/bottom/bottom.vue'
import popwindow from './components/popwindow/popwindow.vue'
import onsale from './components/popwindow/onsale.vue'
import popxueli from './components/popwindow/popxueli.vue'
import bar from './components/bar/bar.vue'
export default {
  name: 'App',
  data () {
    return {
      base: {},
      istrue: false,
      issale: false,
      isxueli: false
    }
  },
  created: function () {
    this.$axios.get('/api/base').then(res => {
      console.log(res.data)
    })
  },
  methods: {
    getting () {
      this.istrue = !this.istrue
      console.log(this.istrue)
    },
    xueli () {
      this.isxueli = !this.isxueli
    },
    closexueli () {
      this.isxueli = !this.isxueli
    },
    closewindows () {
      this.istrue = !this.istrue
    },
    opensale () {
      this.issale = !this.issale
    },
    closesale () {
      this.issale = !this.issale
    }
  },
  components: {
    'v-header': header,
    'v-exam': exam,
    'v-menu': menu,
    'v-bottom': bottom,
    'v-popwindow': popwindow,
    'v-onsale': onsale,
    'v-popxueli': popxueli,
    'v-bar': bar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.testdiv{
  width: 750px;
  height: 300px;
}
</style>
