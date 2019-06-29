import React from 'react';
import { connect } from 'react-redux'
import { filterTodo, clear } from '../actions'

class Footer extends React.Component {

    onFilterAll = () => {
        this.props.filterTodo('all')
    }

    onFilterActive = () => {
        this.props.filterTodo('active')
    }

    onFilterCompleted = () => {
        this.props.filterTodo('completed')
    }

    onClear = () => {
        this.props.clear()
    }

    render () {
        const { todos, filter } = this.props
        const filteredTodos = todos.filter(todo => todo.isCompleted === false)
        const count = filteredTodos.length
        const item = count === 1 ? 'item' : 'items'
        return (
                todos.length !== 0 &&
                <div className='footer'>
                    <p className="itemleft"> {`${count} ${item} left`} </p>
                    <div className="filter">
                        <p 
                            className={filter === 'all' ? "moactive" : "mo"}
                            onClick={this.onFilterAll}
                        >All</p>
                        <p 
                            className={filter === 'active' ? "moactive" : "mo"}
                            onClick={this.onFilterActive}
                        >Active</p>
                        <p 
                            className={filter === 'completed' ? "moactive" : "mo"}
                            onClick={this.onFilterCompleted}
                        >Completed</p> 
                        <p 
                            className="mo1"
                            onClick={this.onClear}
                        >Clear All</p> 
                    </div>      
                </div>
    )
}
}

const mapStateToProps = (state) => ({
    todos: state.todosReducer.todos,
    filter: state.filterReducer
})

export default connect(mapStateToProps, { filterTodo, clear })(Footer);