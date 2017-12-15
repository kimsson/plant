import React, { Component } from 'react'
// import SectionList from './section-list'
import Sensors from './sensors'
import Switches from './switches'
import { connect } from 'react-redux'
// actions
import { loadSensors, loadSwitches, loadSpecificSection, toggleSwitchValue, addSensor, addSwitch } from 'actions/index'

class App extends Component {
  componentDidMount() {
    this.props.loadSensors()
    this.props.loadSwitches()
  }
  onSubmitSensor = (e) => {
    e.preventDefault()
    let ref = this.refs['sensor-name']
    let sensorName = ref.value
    console.log(ref, ' ', ref.value)
    this.props.addSensor(sensorName)
    ref.value = ''
  }
  onSubmitSwitch = (e) => {
    e.preventDefault()
    let ref = this.refs['switch-name']
    let switchName = ref.value
    console.log(ref, ' ', ref.value)
    this.props.addSwitch(switchName)
    ref.value = ''
  }
  onSensorClick = (sectionId) => {
    console.log('App ', sectionId)
    // this.props.loadSpecificSection(sectionId)
  }
  onSwitchClick = (id, value) => {
    value = (value) ? 1 : 0
    console.log('App onSwitchClick ', id, ' ', value)
    this.props.toggleSwitchValue(id, value)
  }

  render() {
    return (
      <div>
        <div>Sensors</div>
        <Sensors
          sensors={this.props.plant}
          onClick={this.onSensorClick}/>
        <form onSubmit={this.onSubmitSensor}>
          <input ref="sensor-name"/>
          <button>Add new sensor</button>
        </form>
        <div>Switches</div>
        <Switches
          switches={this.props.plant}
          onClick={this.onSwitchClick}/>
        <form onSubmit={this.onSubmitSwitch}>
          <input ref="switch-name"/>
          <button>Add new switch</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('index ', state)
  return {
    plant: state.plant
  }
}
// map state to props
export default connect(mapStateToProps, {loadSensors, loadSwitches, loadSpecificSection, toggleSwitchValue, addSensor, addSwitch})(App)
