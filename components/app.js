import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import action from '../redux/action'
class App extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Todos</h1>
        <TodoInput addTodo={this.props.action.addTodo} />
        <TodoList action={this.props.action} todos={this.props.todos} />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(action, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)