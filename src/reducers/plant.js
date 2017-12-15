import _ from 'lodash'
import actionType from 'constants'

let initialState = {
  sensors: []
}
export default (state = initialState, action) => {
  let newState = _.merge({}, state)
  console.log('Red plant ',action.type, ' ',  action.payload)
  switch(action.type) {
    case actionType.LOAD_SENSORS_SUCCESS:
      newState.sensors = action.payload
      return newState
    case actionType.LOAD_SWITCHES_SUCCESS:
      newState.switches = action.payload
      return newState
    default:
      return state
  }
}

export const getSensorById = (state, sectionId) => {
  return state.sensors[sectionId] || {}
}

export const getSwitchesById = (state, sectionId) => {
  return state.switches[sectionId] || {}
}
