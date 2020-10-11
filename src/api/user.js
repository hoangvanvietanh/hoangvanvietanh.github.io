import request from '@/utils/request'
import * as fb from '@/firebase'
// eslint-disable-next-line no-unused-vars
import da from 'element-ui/src/locale/lang/da'
export async function login(data) {
  const { user } = await fb.auth.signInWithEmailAndPassword(data.username, data.password)
  return user
  // return request({
  //   url: '/vue-element-admin/user/login',
  //   method: 'post',
  //   data
  // })
}

export async function getInfo(token) {
  // console.log(token)
  // fb.auth.signInWithCustomToken(localStorage.getItem('token'))
  const user = await fb.usersCollection.doc(token).get()
  return user.data()
  // return request({
  //   url: '/vue-element-admin/user/info',
  //   method: 'get',
  //   params: { token }
  // })
}

export function logout() {
  fb.auth.signOut()
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export async function addPostman(token, dataUpdate) {
  const user = await fb.usersCollection.doc(token)
  const userGet = await user.get()
  const postman = userGet.data().postman
  if (postman) {
    postman[getDateNow()].push(dataUpdate)
    const data = {}
    data['postman'] = postman
    user.update(data)
    return true
  } else {
    const data = {}
    const dataDate = {}
    dataDate[getDateNow()] = [dataUpdate]
    data['postman'] = dataDate
    user.update(data)
    return true
  }
  // eslint-disable-next-line no-unreachable
  return false
}

export async function deletePostmanRequest(token, data) {
  const user = await fb.usersCollection.doc(token)
  const userGet = await user.get()
  const postman = userGet.data().postman
  if (postman) {
    console.log(data)
    postman[data.date].splice(data.index)
    const _data = {}
    _data['postman'] = postman
    user.update(_data)
    return true
  }
  return false
}

export function getDateNow() {
  const today = new Date()
  const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
  return date
}
