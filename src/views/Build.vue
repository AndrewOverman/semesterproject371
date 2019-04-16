<template>
    <div>
        <h1>Your Champion is:</h1>
        <img v-bind:src="'https://ddragon.leagueoflegends.com/cdn/9.7.1/img/champion/' + this.$props.champion + '.png'" alt="">
        <br>
        <img v-for="items in this.$data.build" v-bind:key="items" v-bind:src="'https://ddragon.leagueoflegends.com/cdn/9.7.1/img/item/' +  items + '.png'" alt="">
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
                type: String
            },
            
        },
        data() {
            return {
                items: ["3001", "3194", "3003", "3504", "3174", "3102", "3006", "3153", 
                    "3117", "3009", "3742", "3812", "3147", "3814", "3508", "3110", "3022", "3193", 
                    "3026", "3124", "3030", "3146", "3152", "3025", "3031", "3158", "3109", "3151", 
                    "3100", "3190", "3036", "3285", "3004", "3156", "3041", "3139", "3111", "3222", 
                    "3165", "3033", "3115", "3047", "3056", "3046", "3089", "3143", "3094", "3074", 
                    "3107", "3069", "3401", "3092", "3800", "3027", "3085", "3116", "2065", "3020", 
                    "3161", "3907", "3065", "3087", "3053", "3095", "3068", "3071", "3072", "3075", 
                    "3748", "3078", "3905", "3135", "3083", "3091", "3142", "3157", "3512"
            ],
            spells: ["barrier", "boost", "dot", "exhaust", "flash", "haste", "heal", "smite", "teleport"
            ],
            build:[]
            }
        },
        beforeMount(){
            this.genBuild();
        },
        methods: {
             genBuild(){
                        for(let i = 0; i < 6; i++){
                            this.$data.build.push(
                                this.$data.items[Math.floor(Math.random()*this.$data.items.length)]);
                        }
                        console.log(this.$data.build);
             }
        }
    }
</script>