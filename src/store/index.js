import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist';

const persist = new VuexPersistence({ storage: window.localStorage });

export default createStore({
  state: {
    user: {},
    token: '',
  },
  mutations: {
    setLoggedUser(state, { user, token }) {
      state.user = user;
      state.token = token;
    },

    logout(state) {
      state.user = {};
      state.token = ''
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [persist.plugin],
  getters: {
    user: state => ({ ...state.user }),
    token: state => state.token,
  }
});
