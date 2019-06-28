import React from 'react';
import Todo from './Todo'

import { connect } from 'react-redux'
import { getTodos } from '../actions'

class ListTodo extends React.Component {
    componentDidMount () {
        this.props.getTodos()
    }
    render () {
        const { loading, todos } = this.props   
        return (
            loading ? <p>Loading ...</p> :
            <ul>
                {
                    todos.map(todo => <Todo key={todo._id} todo={todo} />)
                }
            </ul>
        )
    }
}
const mapStateToProps = (state) => ({
    todos: state.todos,
    loading: state.loading
})

export default connect(mapStateToProps, { getTodos })(ListTodo);