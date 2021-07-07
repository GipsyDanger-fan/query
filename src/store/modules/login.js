// import { loginName } from '@/api/login'
import { removeToken } from '@/utils/auth'
const login = {
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    REMOVE_TOKEN: state => {
      state.token = '' // 清空vuex中的token
    }
  },
  actions: {
    // loginName: loginName,
    LogOut ({ commit }) {
      commit('REMOVE_TOKEN')
      removeToken() // 删除保存在 cookie 中的token
    }
  }
}

export default login
