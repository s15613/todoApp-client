import React from 'react';
import Todo from './Todo'

class ListTodo extends React.Component {
    render () {
        return (
            <ul>
                <Todo />
            </ul>
        )
    }
}

export default ListTodo;