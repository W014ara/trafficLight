<template>
    <div v-bind:class="(currentColor !== 'black' && radiance) ? 'light warning' : 'light'" 
         v-bind:style="{background: currentColor, 
                        boxShadow: `0rem .5rem 3rem ${currentColor}`}">
    </div>
</template>


<script>
export default {
   props: ['currentColor', 'radiance'],
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

        &.warning{
            transition: none;
            animation: warning .5s infinite steps(5);
        }
    }

    @keyframes warning {
        from{
            opacity: 50%;
        }

        to{
            opacity: 100%;
        }
    }
</style>
