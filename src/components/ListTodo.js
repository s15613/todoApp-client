import React from 'react';
import Todo from './Todo'

import { connect } from 'react-redux'
import { getTodos } from '../actions'

class ListTodo extends React.Component {
    componentDidMount () {
        this.props.getTodos()
    }
    render () {
        const { loading, todos, filter } = this.props   
        const filterTodos = todos.filter(todo => {
            switch (filter) {
                case 'all': return true
                case 'active': return todo.isCompleted === false
                default: return todo.isCompleted === true
            }
        })
        return (
            loading ? <p>Loading ...</p> :
            <ul>
                {
                    filterTodos.map(todo => <Todo key={todo._id} todo={todo} />)
                }
            </ul>
        )
    }
}
const mapStateToProps = (state) => ({
    todos: state.todosReducer.todos,
    loading: state.todosReducer.loading,
    filter: state.filterReducer
})

export default connect(mapStateToProps, { getTodos })(ListTodo);