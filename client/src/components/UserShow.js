import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import WorldView from './WorldView'
import Header from './styled-components/Header'
import { ContainerTwo, PageContainer } from './styled-components/Containers'
import { ButtonDelete, ButtonEdit } from './styled-components/Buttons'



const Top = styled.div`
    height: 40vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;


    img{
        margin: 10px 0 0 40px;
        height: 300px;
        width: 300px;
        border-radius: 50%;
    }
    h1 {
        font-size: 3em;
        font-family: 'Risque', cursive;
        align-self: center;
        
    }
`

class UserShow extends Component {
    state = {
        user: {},
        redirectToUser: false,
        stateNotSet: true
    }

    deleteUser = async () => {
        const res = await axios.delete(`/api/Users/${this.props.match.params.userId}`)
        const user = this.state.user
        this.props.removeUser(user)
        this.setState({ redirectToUser: true })
    }

    componentWillMount() {
        axios.get(`/api/Users/${this.props.match.params.userId}`)
            .then(res => {
                return this.setState({ user: res.data, stateNotSet: false })
                // console.log(res.data)
            })
    }


    render() {
        const user = this.state.user
        return (
        
            this.state.stateNotSet ? <div></div>:

            (
                <PageContainer>
                    {this.state.redirectToUser ? <Redirect to='/Users' /> : null}
                    <Header>
                        <h1>Fanta<span>See</span></h1>
                        <nav><ul>
                            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}> <li>Home</li></Link>
                            <Link to='/Users' style={{ textDecoration: 'none', color: 'inherit' }}><li>Users</li></Link>
                            <Link to='/Worlds' style={{textDecoration: 'none', color: 'inherit'}}><li>Worlds</li></Link>
                        </ul>
                        </nav>
                    </Header>
                        <Top>
                            <img src={user.photoUrl} alt={user.userName} />
                            <h1>{user.userName}</h1>
                            <div>
                                <Link to={`/Users/${this.props.match.params.userId}/edit`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ButtonEdit>Edit</ButtonEdit></Link>
                                <ButtonDelete onClick={() => { this.deleteUser() }}>Delete</ButtonDelete>
                            </div>
                        </Top>

                        <h2>Worlds Visited</h2>

                            <WorldView worlds={this.state.user.worldsVisited} />
        
            
                </PageContainer>
            )
        
        )
    }
}

export default UserShow
