import * as app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

// firebase init
const firebaseConfig = {
  apiKey: 'AIzaSyAF40wSVIv2zcfWAztN1VbjH5vnqAZP2Ss',
  authDomain: 'developer-tool-b283b.firebaseapp.com',
  databaseURL: 'https://developer-tool-b283b.firebaseio.com',
  projectId: 'developer-tool-b283b',
  storageBucket: 'developer-tool-b283b.appspot.com',
  messagingSenderId: '1821657270',
  appId: '1:1821657270:web:b703e56df8cd3bfc9dbe17',
  measurementId: 'G-F650GKSKQC'
}
app.initializeApp(firebaseConfig)

// utils
const firebase = app
const db = app.firestore()
const auth = app.auth()

// collection references
const usersCollection = db.collection('users')
const storageRef = app.storage().ref()

const usersRef = db.collection('users')
const roomsRef = db.collection('chatRooms')

const filesRef = storageRef.child('files')

const dbTimestamp = firebase.firestore.FieldValue.serverTimestamp()
const deleteDbField = firebase.firestore.FieldValue.delete()
// export utils/refs
export {
  db,
  auth,
  usersCollection,
  storageRef,
  usersRef,
  roomsRef,
  filesRef,
  dbTimestamp,
  deleteDbField,
  firebase
}
