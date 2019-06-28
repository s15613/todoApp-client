import React from 'react';
import { connect } from 'react-redux'
import { deleteTodo, completeTodo } from '../actions'

class Todo extends React.Component {
    
    handleDelete = () => {
        this.props.deleteTodo(this.props.todo._id)
    }

    handleComplete = () => {
        this.props.completeTodo(this.props.todo._id)
    }

    render () {
        const { todo } = this.props
        return (
            <li
                onClick={this.handleComplete}
            >
                <i className={todo.isCompleted ? "fas fa-check-circle mi non" : "fas fa-check-circle mi"}></i>
                <span className={todo.isCompleted ? "done" : ""}>{todo.title}</span>
                <span 
                    className="close"
                    onClick={this.handleDelete}
                >
                    &#10799;           
                </span>
            </li>
        )
    }
}

export default connect(null, { deleteTodo, completeTodo })(Todo);