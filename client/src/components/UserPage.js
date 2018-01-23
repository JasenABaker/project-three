import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UserList from './UserList'
import Header from './styled-components/Header'


class UserPage extends Component {
    state = {
        users: []
    }
    async componentWillMount() {
        const response = await axios.get('/api/Users')
        this.setState({ users: response.data })
        //console.log(response.data)
    }

    render() {
    
        return (
            <div>
                <Header>
                    <h1>Fanta<span>See</span></h1>
                    <nav><ul>
                    <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}><li>Home</li></Link>
                        <li>Worlds</li>
                    </ul>
                    </nav>
                </Header>
                <div>
                    <UserList users={this.state.users} />
                </div>
            </div>
        )
    }
}

export default UserPage