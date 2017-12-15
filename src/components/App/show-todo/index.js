import React, {Component} from 'react'
import TodoList from './todo-list'
import { getSectionById } from 'reducers/todo'
import { createTodoItem } from 'actions/todo'
import { connect } from 'react-redux'

class ShowTodo extends Component {
  componentDidMount(){
    console.log('ShowTodo ', this.props.section);
  }
  onSubmit = (e) => {
    e.preventDefault()
    let ref = this.refs['todo-item-name']
    let todoName = ref.value
    console.log('ShowTodo ', this.props.params.id, ' ', todoName)
    this.props.createTodoItem(this.props.params.id, todoName)
    ref.value = ''
  }

  render() {
    return (
      <div>
        <h4>{this.props.section.name}</h4>
        <TodoList todos={this.props.section.todos}/>
        <form onSubmit={this.onSubmit}>
          <input ref="todo-item-name" />
          <button>Add new item</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
  //passing todo reducer and section's id
  console.log('ShowTodo ', props.params)
  return {section: getSectionById(state.todo, props.params.id)}
}
export default connect(mapStateToProps, {createTodoItem})(ShowTodo)
