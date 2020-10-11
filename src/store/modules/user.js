import {login, logout, getInfo, addPostman, getDateNow, deletePostmanRequest } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import * as fb from '@/firebase'
const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  postman: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_POSTMAN: (state, postman) => {
    state.postman = postman
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
         commit('SET_TOKEN', response.uid)
        setToken(response.uid)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        if (!response) {
          reject('Verification failed, please Login again.')
        }

        // roles must be a non-empty array
        if (!response.roles || response.roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        // response.postman.forEach(x => {
        //   x.reverse()
        // })

        commit('SET_ROLES', response.roles)
        commit('SET_NAME', response.fullName)
        commit('SET_AVATAR', response.avatar)
        commit('SET_INTRODUCTION', response.introduction)
        commit('SET_POSTMAN', response.postman ? response.postman : [])
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  addPostman({ commit, state, despatch }, dataUpdate) {
    return new Promise((resolve, reject) => {
      addPostman(state.token, dataUpdate).then(respone => {
        if (respone === true) {
          if (state.postman && state.postman[getDateNow()]) {
            state.postman[getDateNow()].push(dataUpdate)
          } else {
            state.postman[getDateNow()] = [dataUpdate]
          }
        }
      })
    })
  },
  deletePostman({ commit, state, despatch }, data) {
    return new Promise((resolve, reject) => {
      deletePostmanRequest(state.token, data).then(respone => {
        if (respone === true) {
          state.postman[data.date].splice(data.index)
        }
      })
    })
  },
  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
