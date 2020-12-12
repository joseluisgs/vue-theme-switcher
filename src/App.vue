<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="selector">
      <a href="#" @click="cambiarTema('vue')" class="selector__link vue">Vue 🌞</a>
      <a href="#" @click="cambiarTema('night')" class="selector__link night">Night 🌚</a>
      <a href="#" @click="cambiarTema('eighties')" class="selector__link eighties">80's 🌈</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  // Mi modelo de datos
  data() {
    return {
      element: null,
    };
  },
  // Al creame
  created() {
    // Cogemos el tema del DOM y lo almacenamos, es el elemento etiquetado como theme en index
    this.element = document.getElementById('theme');
    const theme = localStorage.getItem('theme');
    // Según el tema lo cambiamos
    if (theme) {
      this.changeTheme(theme);
    }
  },
  methods: {
    ...mapActions(['changeTheme']),
    // Cabiamos el tema, y disparamos la acción
    // Para ello debemos recoger
    cambiarTema(theme) {
      // Asignamos el nuebo tema a este elemento
      this.changeTheme({ theme, element: this.element });
    },
  },
};
</script>

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
