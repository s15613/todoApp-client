import React from 'react';

class Todo extends React.Component {
    render () {
        return (
            <>
            <li>
            <i class="fas fa-check-circle mi"></i>
                <span>dfadf</span>
                <span className="close">&#10799;</span>
            </li>
            <li>
                <i class="far fa-check-circle mi"></i>
                <span>dfadf</span>
                <span className="close">&#10799;</span>
            </li>
            </>
            
        )
    }
}

export default Todo;