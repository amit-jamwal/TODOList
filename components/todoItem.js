import React from 'react'

class TodoItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.todo.title,
            completed: this.props.todo.completed
        }
    }

    handleComplete() {
        this.props.action.completeTodo(this.props.todo.id)
        this.setState = {
            checked: !this.state.checked
        }
    }

    handleEdit() {
        this.props.action.editTodo(this.props.todo.id)
    }

    handleUpdate() {
        if (this.state.title !== '') {
            this.props.action.updateTodo(this.props.todo.id, this.state.title)
        }
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        })
    }

    handleDueDateChange(event) {
        this.setState({
            dueDate: event
        })
    }

    handleFocusChange(event) {
        this.setState({
            focused: event.focused
        })
    }

    handleDelete(event) {
        this.setState({
            focused: event.focused
        })
    }

    render() {
        return (
            <li className="todo__item">
                <input type="checkbox"
                    defaultChecked={this.state.completed}
                    required={true}
                    onClick={this.handleComplete.bind(this)} />
                <input type="text"
                    onChange={this.handleTitleChange.bind(this)}
                    required={true}
                    placeholder='title'
                    value={this.state.title} />
                <button onClick=
                    {this.handleDelete.bind(this)}>Delete</button>
            </li>
        )
    }
}
export default TodoItem