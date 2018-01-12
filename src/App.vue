<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <div class="routerLink">
      <router-link to='/login'>login</router-link>
      <router-link to='/home'>首页</router-link>
      <router-link to='/home/hello'>首页-hello</router-link>
      <router-link to='/home/hi'>首页-hi</router-link>
      <router-link to='/about'>相关</router-link>
    </div>
  </div>
</template>

<script>


</script>


<style>
  @import "assets/css/index.css";
  #app{
    width: 100%;height: 100%;position: absolute;
  }
  .routerLink a{
    display: block;
    padding: 10px;
  }
</style>
