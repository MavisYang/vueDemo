<template>
  <div class="selectWraper">
    <div class="selectLable">{{name}}</div>
    <div class="selectContent">
      <input type="text">
      <div class="autocompleteBox">
        <ul>
          <li>1212</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'autoComplete',
  props:['name'],
  data(){
    return{

    }
  },
  computed:{

  }

}
</script>

<style>


</style>
