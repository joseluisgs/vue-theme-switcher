import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Directorio donde se almacenan los temas
    baseURL: process.env.BASE_URL,
    // Nombre del tema principal
    theme: 'vue',
  },
  // Mutaciones, solo ellas tocan el estado
  mutations: {
    changeTheme(state, theme) {
      state.theme = theme;
    },
  },
  // Acciones
  actions: {
    // Acciones, sirven para cambiar varias cosas o trasformaciones asíncronas
    changeTheme({ state, commit }, { theme, element }) {
      // Cogemos y le cambiamos la parte de href
      // eslint-disable-next-line no-param-reassign
      element.href = `${state.baseURL}themes/${theme}/theme.css`;
      // Lo almacenamos
      localStorage.setItem('theme', theme);
      // Ejecutamos el cambio
      commit('changeTheme', theme);
    },
  },
});
