<template>
  <div id="app">
    <div id="nav">

    </div>
    <transition name="router-anim">
      <router-view/>
    </transition>
  </div>
</template>

<style>

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.champList {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
.fields input{
    padding: 5px;
    margin: 5px;
}

.fields button{
  margin: 5px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#app {
    background: #fff;
    width: 50%;
    padding: 30px;
    border-radius: 10px;
    margin: 50px auto 0 auto;
    height: calc(60% - 50px);
}

.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going .25s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
