import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserList from './UserList'
import Header from './styled-components/Header'
import {PageContainer} from './styled-components/Containers'
import { Home, World, Plus } from './styled-components/Icon'
import Footer from './styled-components/Footer'


class UserPage extends Component {


    render() {
        //console.log("Rendering User Page")
        return (
            <PageContainer>
                <Header>
                    <h1>Fanta<span>See</span></h1>
                    <nav><ul>
                        <Link to='/Users/new' style={{ textDecoration: 'none', color: 'inherit' }}><li><Plus /></li></Link>
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><li><Home /></li></Link>
                        <Link to='/Worlds' style={{ textDecoration: 'none', color: 'inherit' }}><li><World /></li></Link>
                    </ul>
                    </nav>
                </Header>
                <div>
                    <UserList users={this.props.users} />
                </div>
                <Footer />
            </PageContainer>
        )
    }
}

export default UserPage