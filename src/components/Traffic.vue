<template>
    <div class="app__container">
        <Light v-bind:color="color[0]"/>
        <Light v-bind:color="color[1]"/>
        <Light v-bind:color="color[2]"/>
        <Timer v-bind:color="color"/>
    </div>
</template>

<script>
import Light from '@/components/Light.vue';
import Timer from '@/components/Timer.vue';
export default {
    name: 'traffic',
    props: ['color'],
    components: {
        Light: Light,
        Timer: Timer
    },
}
</script>


<style lang="scss" scoped>
    @import url('../styles/__traffic.scss');
</style>

