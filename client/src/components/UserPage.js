import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserList from './UserList'
import Header from './styled-components/Header'


class UserPage extends Component {
    

    render() {
    console.log("Rendering User Page")
        return (
            <div>
                <Header>
                    <h1>Fanta<span>See</span></h1>
                    <nav><ul>
                    <Link to='/Users/new' style={{textDecoration: 'none', color: 'inherit'}}><li>New User</li></Link>
                    <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}><li>Home</li></Link>
                        <li>Worlds</li>
                    </ul>
                    </nav>
                </Header>
                <div>
                    <UserList users={this.props.users} />
                </div>
            </div>
        )
    }
}

export default UserPage