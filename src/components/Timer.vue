<template>
    <div class="timer">
        <h1>{{this.currentTime}}</h1>
    </div>
    
</template>


<script>

export default {
    props:['currentTime', 'currentID', 'currentShift'],
}
</script>

<style lang="scss" scoped>
    @import '../styles/__fonts.scss';
    .timer{
        margin: 0 auto;
        margin-top: 2rem;
        width: 20.5rem;
        height: 9.5rem;
        background: #252323;
        border-radius: 1.1rem;
        text-align: center;
        h1{
            margin-top: 2.7rem;
            font-family: "Digit";
            font-style: normal;
            font-weight: normal;
            font-size: 6rem;
            line-height: 3.2rem;
            color: #FF0000;
        }
    }
</style>
