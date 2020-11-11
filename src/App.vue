<template>
  <div id="app">
    <Traffic
      v-bind:color="color" 
    />
  </div>
</template>


<script>
  import Traffic from '@/components/Traffic.vue';
  export default{
    name: 'app',
    data(){
       return {
         color: ['red', 'yellow', 'green', 'dark']
       }
    },
    components:{
      Traffic: Traffic
    }
  }
</script>

<style lang="scss" scoped>
  @import url('./styles/__main.scss');
</style>