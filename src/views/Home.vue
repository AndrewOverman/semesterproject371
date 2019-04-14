<template>
  <div id="top">
    <h1 class="title">Ultimate Bravery</h1>
    <table>
      <template v-for="(champ,pos) in champs" class="champList">
        <img key:pos v-bind:src="'https://ddragon.leagueoflegends.com/cdn/9.7.1/img/champion/' + champ + '.png'" alt="">
      </template>
      
    </table>
  </div>
</template>

<script>
  
  export default {
    props: {

    },
    data() {
      return  {
        champs: ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", 
          "Anivia", "Annie", "Ashe", "AurelionSol", "Azir", "Bard", 
          "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", 
          "Chogath", "Corki", "Darius", "Diana", "DrMundo", "Draven", 
          "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", 
          "Fizz", "Galio", "Gangplank", "Garen", "Gnar","Gragas", "Graves", 
          "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", 
          "JarvanIV", "Jax", "Jayce", "Jhin","Jinx", "Kaisa", "Kalista", 
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

    }
  }
</script>