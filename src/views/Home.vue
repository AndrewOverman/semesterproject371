<template>
  <div id="top">
    <h1 class="title">Ultimate Bravery</h1>
    <button class="link" v-on:click="goToLogin">Login/Register</button>
    <button class="link" v-on:click="goToPastBuilds">Past Builds </button>
    <button class="link" v-on:click="goToCustomBuild">Custom Build</button>
    <button class="link" v-on:click="goToCommunityBuilds">Community Builds</button>
    <br><br>
    <button class="link" v-on:click="reset">Reset list</button>
    <button class="link" v-on:click="selectNone">Deselect All</button>
    <button class="link" v-on:click="getChampion">Get Build</button>
    <br>
    <h3></h3>
    <br>
    <table>
      <template v-for="(champ,pos) in champs" class="champList">
        <img v-bind:key="pos" v-on:click="greyOutChamp(pos,champ)" v-bind:id=pos width="8%"
          v-bind:src="'https://ddragon.leagueoflegends.com/cdn/9.7.1/img/champion/' + champ + '.png'" alt="">
      </template>

    </table>
  </div>
</template>

<script>
  import {
    MYDB
  } from "./setupMyFirebase.js";
  import {
    DBAUTH
  } from "./setupMyFirebase.js";
  export default {
    props: {

    },
    data() {
      return {
        currentUser: [MYDB.ref().child("Users")
          .once('value', snapshot => {
            snapshot.child(DBAUTH.currentUser.uid).child("Username").val()
          })
        ],
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
        owned: ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu",
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
        ]
      }
    },
    mounted() {

    },
    methods: {
      goToLogin() {
        this.$router.push({
          name: 'user-login'
        });
      },
      goToCustomBuild() {
        this.$router.push({
          name: 'CustomBuild'
        });
      },
      goToPastBuilds() {
        this.$router.push({
          name: 'PastBuilds'
        });
      },
      goToCommunityBuilds() {
        this.$router.push({
          name: 'CommunityBuilds'
        });
      },
      greyOutChamp(pos, champ) {
        if (document.getElementById(pos).style.filter != "grayscale(100%)") {
          document.getElementById(pos).style.filter = "grayscale(100%)";
          this.$data.owned = this.$data.owned.filter(chmp => chmp != champ);
          console.log(MYDB.ref().child("Users").child(DBAUTH.currentUser.uid).child("Username").val());
        } else {
          document.getElementById(pos).style.filter = "grayscale(0%)";
          this.$data.owned.push(champ);
          this.$data.owned.sort();
          console.log(this.$data.currentUser[0]);
        }
      },
      reset() {
        for (var i = 0; i < this.$data.champs.length; i++) {
          document.getElementById(i).style.filter = "grayscale(0%)";
        }
        this.$data.owned = this.$data.champs;
      },
      selectNone() {
        for (var i = 0; i < this.$data.champs.length; i++) {
          document.getElementById(i).style.filter = "grayscale(100%)";
        }
        this.$data.owned = [];
      },
      getChampion() {
        var champ = this.$data.owned[Math.floor(Math.random() * this.$data.owned.length)];
        this.$router.push({
          name: 'Build',
          params: {
            champion: champ
          }
        });
      }
    }
  }
</script>