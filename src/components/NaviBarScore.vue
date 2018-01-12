
<template>
  <div class="navbarWrapper">
    asa

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {Route} from 'vue-router'

  export default {
    name:'navBar',
    components:{
      Route
    },
    data(){
      return {
        object:{
          name:'mavis',
          age:18
        },
        navRoutes:[
          {
            path:'/home',
            name:'首页',
            target:'/home'
          },
          {
            path:'/about',
            name:'关于',
            target:'/about'
          },
          {
            path:'/directions',
            name:'说明',
            target:'/directions'
          }
        ],
        numbers: [ 1, 2, 3, 4, 5 ]
      }
    },
    computed:{
      evenNumbers(){
        return this.numbers.filter( (num) => {
          return num%2===0
        })
      }
    },
    methods:{
      even:((number)=>{
        return number.filter((num)=>{
          return num %2 === 1
        })
      })
    }
  }
</script>

<style>

</style>
