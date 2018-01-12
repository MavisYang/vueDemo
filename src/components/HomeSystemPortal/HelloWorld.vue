<template>
  <div class="hello">
    <router-view class="hello"></router-view>
    <span v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
    <div>
      <p>{{a}}</p>
      <p v-text="a"></p>
      <p v-html="a"></p>
    </div>
    <button v-on:click="isShow=!isShow">button</button>
    <transition>
      <p v-if="isShow">显示</p>
    </transition>
    <p>{{inputMsg}}</p>
    <input type="text" v-model='inputMsg'>
    <ol>
      <li v-for="item in todos">
        {{item.text}}
      </li>
    </ol>
    <!--<ul>-->
      <!--<todo-item-->
      <!--v-for="item in todos"-->
      <!--v-bind:todo="item"-->
      <!--v-bind:key="item.id"-->
      <!--&gt;-->

      <!--</todo-item>-->
    <!--</ul>-->
    <h1 style="color: red">{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
   return {
     msg: 'Welcome to Your Vue.js App',
     message:'hello mavis 页面加载于'+new Date().toLocaleString(),
     a:1,
     todos:[
       { id:0,text: '学习 JavaScript'},
       { id:1,text: '学习 Vue' },
       { id:2,text: '整个牛项目' }
     ],
     isShow:true,
     inputMsg:'hello mavis'
   }
  }
}
//Vue.component('todo-item',{
//  props:['todo'],
//  template:'<li>这是一个代办想</li>'
//})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
