import React from 'react';
import { connect } from 'react-redux'

class Footer extends React.Component {
    render () {
        const { todos } = this.props
        const filteredTodos = todos.filter(todo => todo.isCompleted === false)
        const count = filteredTodos.length
        const item = count === 1 ? 'item' : 'items'
        return (
                todos.length !== 0 &&
                <div className='footer'>
                    <p className="itemleft"> {`${count} ${item} left`} </p>
                    <div className="filter">
                        <p className="mo">All</p>
                        <p className="mo">Active</p>
                        <p className="mo">Completed</p>  
                    </div>      
                </div>
    )
}
}

const mapStateToProps = (state) => ({
    todos: state.todos,
})

export default connect(mapStateToProps)(Footer);