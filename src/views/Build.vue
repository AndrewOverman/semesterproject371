<template>
  <div>
    <h1>Your Champion is:</h1>
    <img
      v-bind:src="'https://ddragon.leagueoflegends.com/cdn/9.7.1/img/champion/' + this.$data.selectedChampion + '.png'"
      alt="">
    <br>
    <img v-for="items in this.$data.build" v-bind:key="items"
      v-bind:src="'https://ddragon.leagueoflegends.com/cdn/9.7.1/img/item/' +  items + '.png'" alt="">
    <br>
    <input type="text" placeholder="comments" class="text" v-model="playerComment"> 
    <br>
    <button class="link" v-on:click="$router.go(-1)">Back</button>
    <br>
    <button class="link" v-on:click="share()">Share</button>
  </div>
  <!-- https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Overheal.png -->
</template>

<style>
  img {
    text-align: center;
    padding: 3px
  }
</style>

<script>
import {
    MYDB
  } from "./setupMyFirebase.js";
  import {
    DBAUTH
  } from "./setupMyFirebase.js";
  export default {
    props: {
      champion: {
        type: String
      },

    },
    data() {
      return {
        selectedChampion: this.$props.champion,
        playerComment: "",
        items: ["3001", "3194", "3003", "3504", "3174", "3102", "3006", "3153",
          "3117", "3009", "3742", "3812", "3147", "3814", "3508", "3110", "3022", "3193",
          "3026", "3124", "3030", "3146", "3152", "3025", "3031", "3158", "3109", "3151",
          "3100", "3190", "3036", "3285", "3004", "3156", "3041", "3139", "3111", "3222",
          "3165", "3033", "3115", "3047", "3056", "3046", "3089", "3143", "3094", "3074",
          "3107", "3069", "3401", "3092", "3800", "3027", "3085", "3116", "2065", "3020",
          "3161", "3907", "3065", "3087", "3053", "3095", "3068", "3071", "3072", "3075",
          "3748", "3078", "3905", "3135", "3083", "3091", "3142", "3157", "3512"
        ],
        runeTrees: ["Precision", "Domination", "Inspiration", "Resolve", "Sorcery"],
        runes: [
          [
            ["PressTheAttack", "LethalTempo", "FleetFootwork", "Conquerer"],
            ["Overheal", "Triumph", "PresenceOfMind"],
            ["LegendAlacrity", "LegendTenacity", "LegendBloodline"],
            ["CoupDeGrace", "CutDown", "LastStand"]
          ],
          [
            ["Electrocute", "Predator", "DarkHarvest", "HailOfBlades"],
            ["CheapShot", "TasteOfBlood", "SuddenImpact"],
            ["ZombieWard", "GhostPoro", "EyeballCollection"],
            ["RavenousHunter", "IngeniousHunter", "RelentlessHunter", "UltimateHunter"]
          ],
          [
            ["SummonAery", "ArcaneComet", "PhaseRush"],
            ["NullifyingOrb", "ManaflowBand", "NimbusCloak"],
            ["Transcendence", "Celerity", "AbsoluteFocus"],
            ["Scorch", "Waterwalking", "GatheringStorm"]
          ],
          [
            ["GraspOfTheUndying", "Aftershock", "Guardian"],
            ["Demolish", "FontOfLife", "ShieldBash"],
            ["Conditioning", "SecondWind", "BonePlating"],
            ["Overgrowth", "Revitalize", "Unflinching"]
          ],
          [
            ["GlacialAugment", "Kleptomancy", "UnsealedSpellbook"],
            ["HextechFlashtraption", "MagicalFootwear", "PerfectTiming"],
            ["FuturesMarket", "MinionDematerializer", "BiscuitDeliver"],
            ["CosmicInsight", "ApproachVelocity", "TimeWarpTonic"]
          ]
        ],
        spells: ["barrier", "boost", "dot", "exhaust", "flash", "haste", "heal", "smite", "teleport"],
        build: [],
        selectedRunes: []
      }
    },
    beforeMount() {
      this.genBuild();
    },
    methods: {
      genBuild() {
        for (let i = 0; i < 6; i++) {
          var cursor = Math.floor(Math.random() * (this.$data.items.length - .0000001));
          this.$data.build.push(this.$data.items[cursor]);
          this.$data.items.splice(cursor, 1);
        }
        var selection = Math.floor(4.999999 * Math.random());
        // FIXME THIS IS THE TREE this.$data.runes[selection]
        for (let i = 0; i < 4; i++) {
          var cursor = Math.floor(Math.random() * (this.$data.runes[selection][i].length - .0000001))
          this.$data.selectedRunes.push(this.$data.runeTrees[selection] + "/" + this.$data.runes[selection][i][cursor]);
        }
        console.log(this.$data.selectedRunes);
      },
      share(){
        let newKey = MYDB.ref().child(DBAUTH.currentUser.uid).push().key;
        MYDB.ref().child("Builds").child(DBAUTH.currentUser.uid).child(newKey).child("Items").set(this.$data.build);
        MYDB.ref().child("Builds").child(DBAUTH.currentUser.uid).child(newKey).child("Champ").set(this.$data.selectedChampion);
        MYDB.ref().child("Builds").child(DBAUTH.currentUser.uid).child(newKey).child("Comment").set(this.$data.playerComment);

      }
      
    }
  }
</script>