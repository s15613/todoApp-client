import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
    constructor (props) {
        super(props)
        this.onTextSubmit = this.onTextSubmit.bind(this)
    }

    onTextSubmit (e) {
        if (e.key === 'Enter') {
            this.props.addTodo(e.target.value)
            e.target.value = ''
        }
    }

    render () {
        return (
            <input 
                className="new-todo" 
                placeholder="What needs to be done?" 
                onKeyPress={this.onTextSubmit}
            />
        )
    }
}

export default connect(null, { addTodo })(AddTodo);