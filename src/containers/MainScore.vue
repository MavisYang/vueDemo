<template>
  <div class="mm-container">
    <NaviBarScore></NaviBarScore>
    <div class="mm-content" style="width:calc(100% - 121px)">

      <HomeMainScore></HomeMainScore>
    </div>
  </div>
</template>

<script>
import NaviBarScore from '../components/NaviBarScore.vue'
import HomeMainScore from '../components/HomeMainScore.vue'
  export default {
    name:'main',
    components:{
      NaviBarScore,
      HomeMainScore
    },
    data(){
      return{
      }
    },
    created() {},
    ready(){},
    computed: {},
    mounted() {},
    methods:{

    },
    watch:{

    }
  }
</script>


<style>

</style>
