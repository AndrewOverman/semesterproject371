<template>
  <div>
    <h1>Select a Champion:</h1>
    <button class="link" v-on:click="resetChamps">Deselect All</button>
    <br>
    <br>
    <template v-for="(champ,pos) in champs" class="champList">
      <img v-bind:key="pos" v-on:click="greyOutChamp(pos,champ)" v-bind:id="pos" width="8%"
        style="filter: grayscale(100%);"
        v-bind:src="'https://ddragon.leagueoflegends.com/cdn/9.7.1/img/champion/' + champ + '.png'" alt="">
    </template>
    <br>
    <button class="link" v-on:click="resetItems">Reset Items</button>
    <br>
    <template v-for="(item, pos) in items" class="itemList">
      <img v-bind:key="pos + 142" v-on:click="greyOutItem(pos, item)" v-bind:id="pos+142" width="8%"
        style="filter: grayscale(100%);"
        v-bind:src="'https://ddragon.leagueoflegends.com/cdn/9.7.1/img/item/' +  item + '.png'" alt="">
    </template>
    <br>
    <input type="text" placeholder="comment" class="text" v-model="buildComment">
    <br>
    <button class="link" v-on:click="$router.go(-1)">Back</button>
    <br>
    <button class="link" v-on:click="share()">Share</button>
  </div>
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
        champs: ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu",
          "Anivia", "Annie", "Ashe", "AurelionSol", "Azir", "Bard",
          "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia",
          "Chogath", "Corki", "Darius", "Diana", "DrMundo", "Draven",
          "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora",
          "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves",
          "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna",
          "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa", "Kalista",
          "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen",
          "Khazix", "Kindred", "Kled", "KogMaw", "Leblanc", "LeeSin", "Leona",
          "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai",
          "MasterYi", "MissFortune", "Mordekaiser", "Morgana", "Nami", "Nasus",
          "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna",
          "Ornn", "Pantheon", "Poppy", "Pyke", "Quinn", "Rakan", "Rammus", "RekSai",
          "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco",
          "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka",
          "Swain", "Sylas", "Syndra", "TahmKench", "Taliyah", "Talon", "Taric",
          "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate",
          "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Velkoz", "Vi",
          "Viktor", "Vladimir", "Volibear", "Warwick", "MonkeyKing", "Xayah", "Xerath",
          "XinZhao", "Yasuo", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"
        ],
        selectedChampion: [],
        buildComment: "",
        items: ["3001", "3194", "3003", "3504", "3174", "3102", "3006", "3153",
          "3117", "3009", "3742", "3812", "3147", "3814", "3508", "3110", "3022", "3193",
          "3026", "3124", "3030", "3146", "3152", "3025", "3031", "3158", "3109", "3151",
          "3100", "3190", "3036", "3285", "3004", "3156", "3041", "3139", "3111", "3222",
          "3165", "3033", "3115", "3047", "3056", "3046", "3089", "3143", "3094", "3074",
          "3107", "3069", "3401", "3092", "3800", "3027", "3085", "3116", "2065", "3020",
          "3161", "3907", "3065", "3087", "3053", "3095", "3068", "3071", "3072", "3075",
          "3748", "3078", "3905", "3135", "3083", "3091", "3142", "3157", "3512"
        ],
        selectedItems: [],
        runeTrees: ["Precision", "Domination", "Inspiration", "Resolve", "Sorcery"],
        spells: ["barrier", "boost", "dot", "exhaust", "flash", "haste", "heal", "smite", "teleport"],
        build: []
      }
    },
    beforeMount() {
      for (var i = 0; i < this.$data.champs.length; i++) {
        document.getElementById(i).style.filter = "grayscale(100%)";
      }
      this.$data.selectedChampion = [];
      console.log(this.$data.selectedChampion);
    },
    methods: {
      greyOutChamp(pos, champ) {
        if (document.getElementById(pos).style.filter != "grayscale(100%)") {
          document.getElementById(pos).style.filter = "grayscale(100%)";
          this.$data.selectedChampion = this.$data.selectedChampion.filter(chmp => chmp != champ);
          console.log(this.$data.selectedChampion);
        } else {
          document.getElementById(pos).style.filter = "grayscale(0%)";
          this.$data.selectedChampion.push(champ);
          this.$data.selectedChampion.sort();
          console.log(this.$data.selectedChampion);
        }
      },
      greyOutItem(pos, item) {
        pos += 142;
        if (document.getElementById(pos).style.filter != "grayscale(100%)") {
          document.getElementById(pos).style.filter = "grayscale(100%)";
          this.$data.selectedItems = this.$data.selectedItems.filter(itm => itm != item);
          console.log(this.$data.selectedItems);
        } else {
          document.getElementById(pos).style.filter = "grayscale(0%)";
          this.$data.selectedItems.push(item);
          this.$data.selectedItems.sort();
          console.log(this.$data.selectedItems);
        }
      },
      resetItems() {
        for (var i = 142; i < this.$data.items.length + 142; i++) {
          document.getElementById(i).style.filter = "grayscale(100%)";
        }
        this.$data.selectedItems = [];
      },
      resetChamps() {
        for (var i = 0; i < this.$data.champs.length; i++) {
          document.getElementById(i).style.filter = "grayscale(100%)";
        }
        this.$data.selectedChampion = [];
        console.log(this.$data.selectedChampion);
      },
      share() {
        if (this.$data.selectedChampion.length != 1) {
          alert("Please select one champion.");
        } else if (this.$data.selectedItems.length != 6) {
          alert("Please select 6 items.");
        } else if (this.$data.buildComment == "") {
          alert("Please input a comment")
        } else {
          alert("submitted :)");
          let newKey = MYDB.ref().child(DBAUTH.currentUser.uid).push().key;
          MYDB.ref().child("CustomBuilds").child(DBAUTH.currentUser.uid).child(newKey).child("Items").set(this.$data
            .selectedItems);
          MYDB.ref().child("CustomBuilds").child(DBAUTH.currentUser.uid).child(newKey).child("Champ").set(this.$data
            .selectedChampion[0]);
          MYDB.ref().child("CustomBuilds").child(DBAUTH.currentUser.uid).child(newKey).child("Comment").set(this.$data
            .buildComment);
        }

      }

    }
  }
</script>