import React from 'react'
import _ from 'lodash'

export default (props) => {
  console.log('sensors ', props.sensors);

  if(!props.sensors) {
    return(<div>Getting sensors data</div>)
  }

  return (
    <ul>
      {
        _.map(props.sensors.sensors, (sensor) => <li
        key={sensor.name}
        onClick={props.onClick.bind(this, sensor.id)}>{sensor.name} {sensor.value}</li>)
      }
    </ul>
  )
}
