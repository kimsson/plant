import { Router, Route, IndexRoute } from 'react-router'
import App from './App'
// import About from './App/about'

import React, {Component} from 'react'
// import ShowTodo from './App/show-todo'
import { connect } from 'react-redux'
import { loadSensors } from 'actions/index'

class Routes extends Component {
  // constructor(props) {
  //   super(props)
  //   this.props.loadSensors()
  // }
  render() {
    return (
      <Router {...this.props}>
        <Route path='/'>
          <IndexRoute component={App} />
        </Route>
      </Router>
    )
  }
}
export default connect(null, {loadSensors})(Routes)
