<template>
    <div>
        <h1>Your Champion is:</h1>
        <img v-bind:src="'https://ddragon.leagueoflegends.com/cdn/9.7.1/img/champion/' + this.$props.champion + '.png'" alt="">
    </div>
</template>

<style>
    img{
        text-align: center;
        padding:3px
    }
</style>

<script>
    export default {
        props: {
            champion: {
                type: Object
            },
        },
        data() {
            return {
                userName: "Me"
            }
        },
         methods: {
             
        }
    }
</script>