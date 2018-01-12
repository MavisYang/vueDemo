<template>
    <div>
      <div class="homeOneTest">
        <h2>我是子组件</h2>
        {{msgProps}}
        {{counter}}
        <p>
          <button class="btnCss">点击获取</button>
        </p>
        <p>size:{{size}}</p>
        <p>text:{{content}}</p>
        <p>getPropsMsg:{{getPropsMsg}}</p>
        <slot>只有在没有要分发的内容时才会显示。</slot>
        <AutoComplete  name="profile"></AutoComplete>

      </div>
      <div class="right">
        <h1>{{logTitle}}</h1>
        <p>{{createext}}</p>
        <div class="list-item">
          <button class="btnCss" @click="add">add</button>
          <button class="btnCss" @click="remove">remove</button>
          <transition-group name="list" tap="p">
            <ul v-for="item in items" :key="item" class="listUl">
              <li>{{item}}</li>
            </ul>
          </transition-group>
        </div>
      </div>
    </div>
</template>

<script>
  import AutoComplete from '../shareComponent/AutoComplete.vue'
  import $ from 'jquery'
export default {
  name:'HomeOneTest',
  props:['msgProps','size'],
  components:{
    AutoComplete
  },
  data(){
    return{
      logTitle:'logTitle',
      autoList:{
        lable:'群名',
        name:'name',
        id:'name',
        key:'name'
      },
      content:' ASS,CXSA ',
      counter:this.msgProps,
      todos:'todos',
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10,
      createext:'hello!',
    }
  },
  created() {
    console.log('created')
    console.log(this.createext)
    this.createext = 'bye'
    console.log(this.createext)


  },
  mounted() {
    console.log('mounted')
  },
  computed: {
//    变量 而不是方法名getPropsMsg() {}或是getPropsMsg:function() {}
    getPropsMsg:function() {
      return this.size.trim().toUpperCase()
    }
  },
  methods:{
    randomIndex:function () {
      return Math.floor(Math.random()*this.items.length)
    },
    add:function () {
      this.items.splice(this.randomIndex(),0,this.nextNum++)
      console.log(this.items)
    },
    remove:function () {
      this.items.splice(this.randomIndex(),1)
      console.log(this.items)
    },
  },
  watch:{}
}

</script>

<style>
.homeOneTest{
  color: #2c3e50;
  float: left;
  border-right:1px solid red;
  margin-right: 20px;
}
  .right{
    float: left;
  }
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
  /* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
  .list-move{
    transition: transfrom 1s;
  }
  .listUl li{float: left;padding: 2px 6px;}
</style>
