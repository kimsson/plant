import plant from './plant'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  plant,
  routing: routerReducer
})
