import { getSensorsDB, getSwitchesDB, toggleSwitch, setSensorDB, setSwitchDB } from 'javascripts/fb'
import actionType from 'constants'
import { push } from 'react-router-redux'


export const addSensor = (name) => {
  return dispatch => {
   dispatch({
    type: actionType.ADD_SENSOR_REQUEST
   })
   setSensorDB(name)
    .then(res => {
     loadSensors()(dispatch) //refresh the data to keep up-to-date
     dispatch({
      type: actionType.ADD_SENSOR_SUCCESS
     })
    })
    .catch(error => {
     dispatch({
      type: actionType.ADD_SENSOR_FAILED,
      payload: error
     })
    })
  }
}
export const addSwitch = (name) => {
  return dispatch => {
   dispatch({
    type: actionType.ADD_SWITCH_REQUEST
   })
   setSwitchDB(name)
    .then(res => {
     loadSwitches()(dispatch) //refresh the data to keep up-to-date
     dispatch({
      type: actionType.ADD_SWITCH_SUCCESS
     })
    })
    .catch(error => {
     dispatch({
      type: actionType.ADD_SWITCH_FAILED,
      payload: error
     })
    })
  }
}

export const loadSensors = () => {
 return dispatch => {
  dispatch({
   type: actionType.LOAD_SENSORS_REQUEST
  })
  getSensorsDB()
   .then(sections => {
    dispatch({
     type: actionType.LOAD_SENSORS_SUCCESS,
     payload: sections.val()
    })
   })
   .catch(error => {
    dispatch({
     type: actionType.LOAD_SENSORS_FAILED,
     payload: error
    })
   })
 }
}
export const loadSwitches = () => {
 return dispatch => {
  dispatch({
   type: actionType.LOAD_SWITCHES_REQUEST
  })
  getSwitchesDB()
   .then(sections => {
    dispatch({
     type: actionType.LOAD_SWITCHES_SUCCESS,
     payload: sections.val()
    })
   })
   .catch(error => {
    dispatch({
     type: actionType.LOAD_SWITCHES_FAILED,
     payload: error
    })
   })
 }
}
export const toggleSwitchValue = (id, value) => {
 return dispatch => {
  dispatch({
   type: actionType.TOGGLE_SWITCHES_REQUEST
  })
  toggleSwitch(id, value)
   .then(sections => {
    loadSwitches()(dispatch) //refresh the data to keep up-to-date
    dispatch({
     type: actionType.TOGGLE_SWITCHES_SUCCESS,
     payload: sections.val()
    })
   })
   .catch(error => {
    dispatch({
     type: actionType.TOGGLE_SWITCHES_FAILED,
     payload: error
    })
   })
 }
}

export const loadSpecificSection = (sectionId) => {
  return (dispatch) => {
    console.log('loadSpecificSection ', `/${sectionId}`);
    dispatch(push(`/${sectionId}`))
  }
}
