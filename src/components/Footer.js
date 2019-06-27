import React from 'react';
import Todo from './Todo'

class Footer extends React.Component {
    render () {
        return (
            <div className='footer'>
                <p className="itemleft">1 item left</p>
                <div className="filter">
                    <p className="mo">All</p>
                    <p className="mo">Active</p>
                    <p className="mo">Completed</p>  
                </div>      
            </div>
        )
    }
}

export default Footer;