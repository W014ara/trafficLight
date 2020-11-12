<template>
  <div class="app__container">
    <Light v-bind:color="lightData[1]"
        v-bind:currentID="this.blockID[0]"
        v-bind:checkID="lightData[5]"
        v-bind:warningToggle="this.warningToggle"
    />
    <Light v-bind:color="lightData[2]"
        v-bind:currentID="this.blockID[1]"
        v-bind:checkID="lightData[5]"
        v-bind:warningToggle="this.warningToggle"
    />
    <Light v-bind:color="lightData[3]"
        v-bind:currentID="this.blockID[2]"
        v-bind:checkID="lightData[5]"
        v-bind:warningToggle="this.warningToggle"
    />
    <Timer v-bind:currentTime="this.finalTime"
    />
    </div>
</template>

<script>
import Light from '@/components/Light.vue';
import Timer from '@/components/Timer.vue';
// import Data from '../data.js';
export default {
    name: 'traffic',
    props: ['lightData', 'shift'],

    components: {
        Light: Light,
        Timer: Timer,
    },

    data(){
        return{
            finalTime: null,
            currentShift: 0,
            warningToggle: false,
            blockID: [1, 2, 3]
        }
    },

    created(){
        this.finalTime = this.lightData[4];
        this.currentShift = this.shift;
        setInterval(() => {
            if(this.finalTime >= 1 && this.finalTime < 5){
                this.warningToggle = true;
            }else this.warningToggle = false;

            if(this.finalTime === 0){
                if(this.currentShift === 0){
                    switch(this.lightData[5]){
                        case 1:
                            this.$router.push('/yellow');
                            this.finalTime = 3;
                            break;
                        case 2:
                            this.$router.push('/green');
                            this.finalTime = 15;
                            break;
                        case 3:
                            this.$router.push('/yellow');
                            this.currentShift = 1;
                            this.finalTime = 3;
                            break;
                    }
                }else{
                    switch(this.lightData[5]){
                        case 2:
                            this.$router.push('/red');
                            this.currentShift = 0;
                            this.finalTime = 10;
                        break;
                    }
                }
            }else this.finalTime = this.finalTime - 1;
        }, 1000);
    },
}
</script>


<style lang="scss" scoped>
    @import url('../styles/__traffic.scss');
</style>
