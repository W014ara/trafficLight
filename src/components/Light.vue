<template>
    <div class="light" :style="{backgroundColor: color, boxShadow: '0rem .5rem 3rem' + ' ' + color}">
    </div>
</template>


<script>
export default {
    props: ['color']
}
</script>

<style lang="scss" scoped>
    @import url('../styles/__light.scss');
    .light{
        &::after{
            content: '';
            position: absolute;
            width: 15rem;
            height: .5rem;
            background: #494949;
            border-radius: .5rem;
            margin-top: 17rem;    
        }
        &:nth-child(2){
            margin-top: 5rem;
        }
        &:nth-child(3){
            margin-top: 5rem;
        }
    }
</style>