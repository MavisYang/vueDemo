
<template>
  <div class="homeMainWrapper">
    <h2>我是父组件</h2>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>

    <h1 v-show="type==='B'">show</h1>


    <!--<div id="todo-list-example">-->
      <!--<input type="text"-->
      <!--v-model="newTodoText"-->
      <!--v-on:keyup.enter="this.addNewTodo"-->
      <!--placeholder="add a todo">-->
      <!--<ul>-->
        <!--<li is="todo-item"-->
        <!--v-for="(item,index) in todos"-->
        <!--:key="item.id"-->
        <!--v-bind:title="item.title"-->
        <!--v-on:remove="todos.splice(index,1)"></li>-->
      <!--</ul>-->
    <!--</div>-->

    <button v-on:click="number +=1">点击1</button>
    <button v-on:click="handleClick('hello')">say hello</button>
    <button v-on:click="warn('访问原生事件对象',$event)">$event</button>
    <p>增加数字{{number}}</p>


    <div style="margin: 10px;cursor: pointer">
      <!--一直可点击-->
      <a v-on:click.stop="doThis">stop</a>
      <!--只可点击一次-->
      <a v-on:click.once="doThis">stop once</a>
      <br/>
      <input v-model.trim="inputMsg" type="text" name="Name" v-on:keyup.enter="submit($event)"> <br/>
      <p> message is :{{inputMsg}}</p>
      <p>{{message}}</p>
      <p v-if="this.msgList.name!=''&&this.msgList.value!=''">{{this.msgList.name}}:{{this.msgList.value}}</p>
      <input type="text" name="delete" @keyup.delete="deleteHandle($event)"><br/>

      <input v-model="checked" type="checkbox" name="checked">
      <span>{{checked}}</span>
      <!--<lable for="checked"></lable>-->
      <br>

      <input v-model="checkedAll" type="checkbox" @click="checkedAllHandle">
      <input v-model="checked" type="checkbox">
      <input v-model="checked" type="checkbox">
      <input v-model="checked" type="checkbox">

      <button class="btnCss" @click="clickHandel">点击</button>

      <ul>
        <li v-for="item in todos" :key="item.id">
          {{item.title}}
        </li>
      </ul>
      <button class="btnCss" @click="pushList">btn</button>
    </div>


    <div>
      <button class="btnCss" v-on:click="show=!show">Toggle</button>
      <transition name="fade" :duration="{enter:500,leave:1000}" mode="out-in">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <HomeOneTest msgProps='msgProps' size=' sasa '></HomeOneTest>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HomeOneTest from './HomeSystemPortal/HomeOneTest.vue'
  import TsetVue from './HomeSystemPortal/TestVue.vue'
  export default {
    name: 'homeMain',
    components:{
      HomeOneTest
    },
    data() {
      return {
        show:true,
        currentView:'home',
        todo:{
          text:'learn vue',
          isComplete:false
        },
        type: 'A',
        newTodoText: '',
        nextTodoId: 4,
        todos: [
          {
            id: 1,
            title: 'Do the dishes',
          },
          {
            id: 2,
            title: 'Take out the trash',
          },
          {
            id: 3,
            title: 'Mow the lawn'
          }
        ],
        number: 0,
        inputMsg: '',
        message: '',
        msgList: {
          name: '',
          value: ''
        },
        checkedAll:false,
        checked:false,
        checkedArray:'',
        msg:'',

      }
    },
    computed: {

    },
    methods: {
      changeView:((value)=>{
        this.view = value
      }),
      checkedAllHandle:(()=>{

      }),
      clickHandel:(()=>{
        let checkedList =[]
        if(!this.checked){ //true
          checkedList.push(false)
        }
        this.checkedArray = checkedList
        console.log(checkedList)
        console.log(this.checkedArray)
      }),
      addNewTodo: () => {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      },
      //传参函数
      handleClick:((message) => {
        console.log(message)
      }),
      warn: ((message, event) => {
        // 现在我们可以访问原生事件对象
        if (event) event.preventDefault()
        console.log(message)
      }),
      doThis: () => {
        console.log('stop' + Math.random())
      },
      submit: ((event) => {
        this.message = event.target.value
        this.msgList.name = event.target.name
        this.msgList.value = event.target.value
      }),
      deleteHandle: ((event) => {
        console.log(event.target.name, event.target.value)
      }),
      pushList:function () {
        this.todos.push({id:4,title:'title4'})
      }


    }
  }


  //  Vue.component('todo-item',{
  //    template:'<li>{{title}}' +
  //    '<button v-on:click="$emit(remove)">X</button>' +
  //    '</li>',
  //    props:['title']
  //  })
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
</style>
