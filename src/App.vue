<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="selector">
      <a href="#" @click="changeTheme('vue')" class="selector__link vue">Vue 🌞</a>
      <a href="#" @click="changeTheme('night')" class="selector__link night">Night 🌚</a>
      <a href="#" @click="changeTheme('eighties')" class="selector__link eighties">80's 🌈</a>
    </div>
    <router-view/>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss" scoped>
#app {
  transition: all .5s ease-in-out;
}
.selector {
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
}

.selector__link {
  margin: 0 .3rem;
  text-decoration: none;
  border: 1px solid;
  padding: .3rem;
  color: white;
  font-weight: bold;
  border-radius: .5rem;
  display: inline-block;
  transition: all .3s ease-in-out;
}

.selector__link:hover {
  transform: translateY(.5rem);
}

.selector__link.vue {
  background-color: #42b983;
}

.selector__link.night {
  background-color: black;
}

.selector__link.eighties {
  background-color: purple;
}

</style>
