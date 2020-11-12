<template>
  <div id="app">
    <Traffic v-bind:lightData="this.$route.matched[0].props.default.curObj" 
             v-bind:shift="this.$route.matched[0].props.default.shift" />
  </div>
</template>


<script>
  import Traffic from '@/components/Traffic.vue';

  export default{
    name: 'app',
    components:{
      Traffic: Traffic
    }
  }
</script>

<style lang="scss" scoped>
  @import url('./styles/__main.scss');
</style>
