// import { LayoutRouterMap } from '@/router'
const permission = {
  state: {
    // routes: LayoutRouterMap
  },
  mutations: {
    NEW_ROUTES: state => {}
  },
  actions: {
    new_routes ({ commit }) {
      commit('NEW_ROUTES')
    }
  }
}

export default permission
