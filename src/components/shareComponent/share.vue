<template>

</template>

<script>

  export default {
    beforeCreate:function () {
      console.log('初始化前')
    },
    created:function () {
      console.log('创建完成')
    },
    beforeMount:function () {
      console.log('挂载之前')
    },
    mounted:function () {
      console.log('被创建了')
    },
    beforeUpdate:function () {
      console.log('数据更新前')
    },
    updated:function () {
      console.log('更新后')
    },
    activeated:function () {
      console.log('现在不会被执行1')
    },
    deactivated:function () {
      console.log('现在不会被执行2')
    },
    beforeDestroy:function () {
      console.log('销毁前')

    },
    destroyed:function () {
      console.log('销毁后')
    }
  }


</script>

<style>


</style>
