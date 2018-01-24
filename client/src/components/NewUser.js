import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './styled-components/Header'


class NewUser extends Component {

    render() {
        return (
            <div>
                <Header>
                    <h1>Fanta<span>See</span></h1>
                    <nav><ul>
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><li>Home</li></Link>
                        <Link to='/Users' style={{ textDecoration: 'none', color: 'inherit' }}><li>Users</li></Link>
                        <li>Worlds</li>
                    </ul>
                    </nav>
                </Header>
                <div>
                    <h1>New User</h1>
                </div>
            </div>
        )
    }
}


export default NewUser