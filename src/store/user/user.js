import { async } from "q"

export const state = () => ({
  showFindingInfo: true,
  showAddFindingInfo: false,
  userLogged: null,
  userData: null,
  user_1: {
          'id': '1',
          'name': 'Jarjit Singh',
          'email': 'jarjit@mail.com',
          'password': '123456',
          'avatar': 'https://api.adorable.io/avatars/160/jarjit@mail.com.png'
      },
  user_2: {
        'id': '2',
        'name': 'Ismail bin Mail',
        'email': 'ismail@mail.com',
        'password': '123456',
        'avatar': 'https://api.adorable.io/avatars/160/ismail@mail.com.png'
    },
    login_page: true
})
export const mutations = {
  LOGIN: (state, payload) => {
    state.findingData = payload
  },
  FIRST_USER_LOGGED: (state) => {
      state.userLogged = state.user_1
  },
  SECOND_USER_LOGGED: (state) => {
      state.userLogged = state.user_2
    //   console.log(state.userLogged)
  },
  USER_DATA: (state) => {
      state.userData = state.userLogged
  },
  LOGOUT: (state) => {
      state.userLogged = null
  }
}
export const actions = {
  login: async ({commit}, payload) => {
    commit('LOGIN', payload)
  },
  firstUser: async ({commit}) => {
      commit('FIRST_USER_LOGGED')
  },
  secondUser: async ({commit}) => {
    commit('SECOND_USER_LOGGED')
  },
  getUser: async ({commit}) => {
      commit('USER_DATA')
  },
  logout: async ({commit}) => {
      commit('LOGOUT')
  }
}

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions
}
