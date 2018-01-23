import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import UserList from './UserList'
import Header from './styled-components/Header'


class UserPage extends Component {
    state = {
        users: []
    }
    async componentWillMount() {
        const response = await axios.get('localhost:4000/Users')
        this.setState({ users: response.data })
    }

render() {
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