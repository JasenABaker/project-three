import React, { Component } from 'react'
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
        console.log(this.state.users)
        return (
            <div>
                <Header>
                    <h1>Fanta<span>See</span></h1>
                    <nav><ul>
                        <li>Home</li>
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