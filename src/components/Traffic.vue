<template>
  <div class="app__container">
    <Light v-bind:currentColor="lightInfo[1]"
           v-bind:radiance="radiance" />
    <Light v-bind:currentColor="lightInfo[2]"
           v-bind:radiance="radiance" />
    <Light v-bind:currentColor="lightInfo[3]"
           v-bind:radiance="radiance" />
    <Timer v-bind:currentTime="currentTime"/>
    </div>
</template>

<script>
import Light from '@/components/Light.vue';
import Timer from '@/components/Timer.vue';

export default {
    name: 'traffic',

    props: ['lightInfo', 'currentTime', 'radiance'],

    components: {
        Light: Light,
        Timer: Timer,
    }
}
</script>


<style lang="scss" scoped>
    @import url('../styles/__traffic.scss');
</style>
