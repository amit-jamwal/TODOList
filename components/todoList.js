import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    render() {
        return (
            <ul className='todo_list'>{
                this.props.todos.map(todo => {
                    console.log(todo)
                    // if (todo.display) {
                        return <TodoItem key={todo.id} todo={todo} action={this.props.action} />
                    // }
                })
            }</ul>
        )
    }
}
export default TodoList