import router from '@/router'
import * as fb from '@/firebase'

const state = {
  userProfile: {}
}
const mutations = {
  setUserProfile(state, val) {
    state.userProfile = val
  }
}
const actions = {
  async login({ dispatch }, form) {
    // sign user in
    const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

    // fetch user profile and set in state
    dispatch('fetchUserProfile', user)
  },
  async register({ dispatch }, form) {
    // sign user up
    const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

    // create user profile object in userCollections
    console.log(form)
    await fb.usersCollection.doc(user.uid).set({
      _id: user.uid,
      fullName: form.fullName,
      username: form.username,
      roles: 'admin',
      postman: [],
      introdcution: 'Hi my friend',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
    })

    // fetch user profile and set in state
    dispatch('fetchUserProfile', user)
  },
  async fetchUserProfile({ commit }, user) {
    // fetch user profile
    const userProfile = await fb.usersCollection.doc(user.uid).get()

    // set user profile in state
    commit('setUserProfile', userProfile.data())

    // change route to dashboard
    router.push('/')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
