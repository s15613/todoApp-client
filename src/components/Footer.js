import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Footer extends React.Component {
    render () {
        const { todos } = this.props
        const filteredTodos = todos.filter(todo => todo.isCompleted === false)
        const count = filteredTodos.length
        const item = count === 1 ? 'item' : 'items'
        return (
            <Router>
                {
                    todos.length !== 0 &&
                    <div className='footer'>
                        <p className="itemleft"> {`${count} ${item} left`} </p>
                        <div className="filter">
                            <Link 
                                to='/' 
                                className="mo"
                            >   All
                            </Link>
                            <Link 
                                to='/active' 
                                className="mo"
                            >
                                Active
                            </Link>
                            <Link to='/completed' className="mo">Completed</Link>  
                        </div>      
                    </div>
                }
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos,
})

export default connect(mapStateToProps)(Footer);