import React, { Component } from 'react';
import '../styles/landing.css'
import { Link } from 'react-router-dom'
class Landing extends Component {
    render() {
        let users = this.props.state
        return (
            <div className='users'>
                {users.map(u => {
                    return (
                        <Link to={`/catalog/${u.id}`}>
                            <div n={u.name} key={u.name} style={{ backgroundColor: u.backGround }}>{u.name}</div>
                        </Link>
                    )
                })}

            </div>
        );
    }
}

export default Landing;