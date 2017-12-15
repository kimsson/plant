import React from 'react'
import _ from 'lodash'

export default (props) => {
  console.log('switches ', props.switches);

  if(!props.switches) {
    return(<div>Getting switches data</div>)
  }

  return (
    <ul>
      {
        _.map(props.switches.switches, (pswitch) => <li
        key={pswitch.name}
        onClick={props.onClick.bind(this, pswitch.id, !pswitch.value)}>{pswitch.name} {pswitch.value}</li>)
      }
    </ul>
  )
}
