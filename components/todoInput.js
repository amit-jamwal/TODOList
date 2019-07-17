import React, { component } from 'react'

class TodoInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }
    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleSubmit(event) {
        // event.preventDefault()
        console.log(this.state)
        if (this.state.title !== '') {
            this.props.addTodo(this.state.title)

            //RESETING INPUT BOX...
            this.setState({
                title: ''
            })
        }
    }

    render() {
        return (
            <div className="toto_input">
                <div className='title'>
                    <input type='text' placeholder='title' required={true} value={this.state.title}
                        onChange={this.handleTitleChange.bind(this)} />
                </div>
                <div className="submitButton">
                    <button onClick={this.handleSubmit.bind(this)}>Add</button>
                </div>
            </div>
        )
    }
}

export default TodoInput