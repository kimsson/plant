
import * as firebase from 'firebase'
import sensorModel from './models/sensor'
import switchModel from './models/switch'

let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyD_yKc_4Pubmpc6Ew4GX7b3cW467Bjz_WI",
    authDomain: "plant-e5d30.firebaseapp.com",
    databaseURL: "https://plant-e5d30.firebaseio.com",
    projectId: "plant-e5d30",
    storageBucket: "",
    messagingSenderId: "754352210290"
  }
  firebase.initializeApp(config)
  database = firebase.database()


}
/*
load (ref, callback) {
  this.firebase.database()
               .ref(ref)
               .once('value')
               .then(callback)
}

// Sets the key automatically
push (ref, object, callback) {
  this.firebase.database()
               .ref(ref)
               .push(object)
               .then(callback)
}

// Key is expected in the refs
set (ref, object, callback) {
  this.firebase.database()
               .ref(ref)
               .set(object)
               .then(callback)
}

// Key is expected in the refs
update (ref, object, callback) {
  this.firebase.database()
               .ref(ref)
               .update(object)
               .then(callback)
}
*/

// retrieve from firebase
// return promise object
export const getSensorsDB = () => {
  return database.ref('/sensors').once('value')
}

export const setSensorDB = (name) => {
  let key = database.ref('sensors/').push().key
  let model = switchModel(key, name, firebase.database.ServerValue.TIMESTAMP)
  return database.ref('sensors/'+ key).set(model)
}
export const setSwitchDB = (name) => {
  let key = database.ref('switches/').push().key
  let model = sensorModel(key, name, firebase.database.ServerValue.TIMESTAMP)
  return database.ref('switches/'+ key).set(model)
}



// return promise object
export const getSwitchesDB = () => {
  return database.ref('switches/').once('value')
}

export const toggleSwitch = (sectionId, val) => {
  console.log('toggleSwitch ', sectionId, ' ', val)
  database.ref(`switches/${sectionId}/value`).set(val)
  return database.ref(`switches/${sectionId}`).once('value')
}
