
import * as firebase from 'firebase'
import sectionModel from './models/section'
import todoModel from './models/todo'

let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyAt0rTnJCo7e32ZLEJeAYymRwEwBMjV9co",
    authDomain: "todo-5a27f.firebaseapp.com",
    databaseURL: "https://todo-5a27f.firebaseio.com",
    projectId: "todo-5a27f",
    storageBucket: "todo-5a27f.appspot.com",
    messagingSenderId: "451096112267"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}

// retrieve from firebase
// return promise object
export const getSectionsDB = () => {
  return database.ref('/').once('value')
}
// get specified section
export const getTodoDB = (sectionId) => {
  return database.ref(`/${sectionId}`).once('value')
}
// add new section
export const addSection = (name) => {
  let key = database.ref('/').push().key
  let model = sectionModel(key, name, firebase.database.ServerValue.TIMESTAMP)
  return database.ref('/'+ key).set(model)
}
// add new todo item into specified section
export const addTodoItem = (id, name) => {
  return new Promise((resolve, reject) => {
    database.ref(`/${id}`).once('value').then((todo) => {
      let todos = todo.val().todos || []
      let key = database.ref(`/${id}`).push().key
      todos.push(todoModel(key, name, firebase.database.ServerValue.TIMESTAMP))
      database.ref(`/${id}/todos`).set(todos)
        .then( res => {resolve(res)})
        .catch( error => {reject(error)})
    })
  })
}
