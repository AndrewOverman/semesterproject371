# semester-project

#Using these API's We should be able to get what we need key free: 
https://ddragon.leagueoflegends.com/cdn/9.7.1/img/champion/CHAMPION_NAME.png
https://ddragon.leagueoflegends.com/cdn/9.7.1/img/item/ITEM_NUMBER.png
https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/RUNE_TREE/RUNE.png
https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Overheal.png
https://ddragon.leagueoflegends.com/cdn/9.7.1/data/en_US/mastery.json
https://ddragon.leagueoflegends.com/cdn/9.7.1/img/spell/ZyraE.png

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Arrays for champs/items/rune IDs
```
var items = ["3001", "3194", "3003", "3504", "3174", "3102", "3006", "3153", 
"3117", "3009", "3742", "3812", "3147", "3814", "3508", "3110", "3022", "3193", 
"3026", "3124", "3030", "3146", "3152", "3025", "3031", "3158", "3109", "3151", 
"3100", "3190", "3036", "3285", "3004", "3156", "3041", "3139", "3111", "3222", 
"3165", "3033", "3115", "3047", "3056", "3046", "3089", "3143", "3094", "3074", 
"3107", "3069", "3401", "3092", "3800", "3027", "3085", "3116", "2065", "3020", 
"3161", "3907", "3065", "3087", "3053", "3095", "3068", "3071", "3072", "3075", 
"3748", "3078", "3905", "3135", "3083", "3091", "3142", "3157", "3512"];

var jungleItems = ["1400", "1401", "1402", "1419"];

var spells = ["barrier", "boost", "dot", "exhaust", "flash", "haste", "heal", "smite", "teleport"];

var precision = [["PressTheAttack", "LethalTempo", "FleetFootwork", "Conquerer"], 
["Overheal", "Triumph", "PresenceOfMind"], ["LegendAlacrity", "LegendTenacity", "LegendBloodline"],
["CoupDeGrace", "CutDown", "LastStand"]];

var domination = [["Electrocute", "Predator", "DarkHarvest", "HailOfBlades"], 
["CheapShot", "TasteOfBlood", "SuddenImpact"], ["ZombieWard", "GhostPoro", "EyeballCollection"],
["RavenousHunter", "IngeniousHunter", "RelentlessHunter", "UltimateHunter"]];

var sorcery = [["SummonAery", "ArcaneComet", "PhaseRush"], 
["NullifyingOrb", "ManaflowBand", "NimbusCloak"], ["Transcendence", "Celerity", "AbsoluteFocus"],
["Scorch", "Waterwalking", "GatheringStorm"]];

var resolve = [["GraspOfTheUndying", "Aftershock", "Guardian"], 
["Demolish", "FontOfLife", "ShieldBash"], ["Conditioning", "SecondWind", "BonePlating"],
["Overgrowth", "Revitalize", "Unflinching"]];

var sorcery = [["GlacialAugment", "Kleptomancy", "UnsealedSpellbook"], 
["HextechFlashtraption", "MagicalFootwear", "PerfectTiming"], ["FuturesMarket", "MinionDematerializer", "BiscuitDeliver"],
["CosmicInsight", "ApproachVelocity", "TimeWarpTonic"]];

var boots = ["3006", "3117", "3009", "3158", "3111", "3047", "3020"];

var champs = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Auerlion Sol", "Azir", 
"Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", 
"Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar",  
"Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin",
"Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", 
"Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", 
"Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu & Willump", "Olaf", 
"Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", 
"Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", 
"Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", 
"Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", 
"Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
```
