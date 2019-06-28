import React from 'react';

class AddTodo extends React.Component {
    render () {
        return (
            <input className="new-todo" placeholder="What needs to be done?" />
        )
    }
}

export default AddTodo;