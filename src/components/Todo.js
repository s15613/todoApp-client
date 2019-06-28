import React from 'react';

class Todo extends React.Component {
    render () {
        const { todo } = this.props
        console.log(todo)
        return (
            <>
            <li>
                <i className="fas fa-check-circle mi non"></i>
                <span className="title done">{todo.title}</span>
                <span className="close">&#10799;</span>
            </li>
            {/* <li>
                <i className="far fa-check-circle mi"></i>
                <span>Go to Tran Duy Hung Street</span>
                <span className="close">&#10799;</span>
            </li> */}
            </>
            
        )
    }
}

export default Todo;