<template>
  <div class="test">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ this.reversedMessage }}"</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
export default {
    name:'testVue',
    props:[],
    data(){
      return {
        isActive:true,
        message:'hello mavis'
      }
    },
    computed:{
      reversedMessage(){
        return this.message.split('').reverse().join('')
      }
    },
    mounted:{

    },
    methods:{

    },
    watch:{

    },
  }
</script>
