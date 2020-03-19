import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    username: '',
    user_id: ''
  },
  mutations: {
    set_token(state, token) {
      state.token = token
      localStorage.token = token
    },
    set_userinfo(state, userinfo) {
      state.username = userinfo.username
      state.user_id = userinfo.user_id
      localStorage.username = userinfo.username
      localStorage.user_id = userinfo.user_id
    },
    del_token(state) {
      state.token = ''
      state.userInfo = ''
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
    }
  }
}) 