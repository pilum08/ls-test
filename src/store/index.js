import { createStore } from 'vuex'

export default createStore({
  state: {
    checked: 0
  },
  mutations: {
    CHECKED_INC (state) {
      state.checked += 1
    },
    CHECKED_DEC (state) {
      state.checked -= 1
    }
  },
  getters: {

  },
  actions: {

  }
})
