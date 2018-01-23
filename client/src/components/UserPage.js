import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import UserList from './UserList'


class UserPage extends Component {
    state = {
        users: []
    }
    getAllUsers = () => {
        axios.get('localhost:4000/Users').then((res)=>{
            this.setState({users: res.data})
        })
    }
    render() {
        return (
            <div>
            <UserList />
            </div>
        )
    }
}


export default UserPage