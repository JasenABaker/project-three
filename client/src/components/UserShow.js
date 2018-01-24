import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import WorldView from './WorldView'
import Header from './styled-components/Header'

const Container = styled.div`
    height: 85vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    h2{
        align-self: center;
    }
`

const Top = styled.div`
    height: 40vh;
    width: 50vw;
    display: flex;
    justify-content: space-between;
    align-items: center;


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
        user:{}
    }
    async componentWillMount () {
        const res = await axios.get(`/api/Users/${this.props.match.params.userId}`)
        this.setState({ user: res.data})
       // console.log(res.data)
    }

    render() {
        const user = this.state.user
        return(
            <div>
                <Header>
                    <h1>Fanta<span>See</span></h1>
                    <nav><ul>
                    <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}> <li>Home</li></Link>
                    <Link to='/Users' style={{textDecoration: 'none', color: 'inherit'}}><li>Users</li></Link>
                    <Link to='*' style={{textDecoration: 'none', color: 'inherit'}}><li>Worlds</li></Link>
                    </ul>
                    </nav>
                </Header>
            <Container>
                <Top>
                <img src={user.photoUrl} alt={user.userName}/>
                <h1>{user.userName}</h1>
                </Top>
                
                    <h2>Places Visited</h2>
                
                <div>
                    <WorldView user={this.state.user}/>
                </div>
                <div>
                    Localsview
                </div>
            </Container>
            </div>
        )
    }


}


export default UserShow
