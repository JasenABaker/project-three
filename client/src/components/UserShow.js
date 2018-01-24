import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import WorldView from './WorldView'
import Header from './styled-components/Header'
import { ContainerTwo } from './styled-components/Containers'
import { ButtonDelete } from './styled-components/Buttons'



const Top = styled.div`
    height: 40vh;
    width: 100vw;
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
        user:{},
        redirectToUser: false
    }
    async componentWillMount () {
        const res = await axios.get(`/api/Users/${this.props.match.params.userId}`)
        this.setState({ user: res.data})
    // console.log(res.data)
    }

    deleteUser = async () => {
        const res = await axios.delete(`/api/Users/${this.props.match.params.userId}`)
        this.setState({redirectToUser: true})
    }

    render() {
        const user = this.state.user
        return(
            <div>
                {this.state.redirectToUser ? <Redirect to='/Users'/> : null}
                <Header>
                    <h1>Fanta<span>See</span></h1>
                    <nav><ul>
                    <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}> <li>Home</li></Link>
                    <Link to='/Users' style={{textDecoration: 'none', color: 'inherit'}}><li>Users</li></Link>
                    <Link to='*' style={{textDecoration: 'none', color: 'inherit'}}><li>Worlds</li></Link>
                    </ul>
                    </nav>
                </Header>
            <ContainerTwo>
                <Top>
                <img src={user.photoUrl} alt={user.userName}/>
                <h1>{user.userName}</h1>
                <ButtonDelete>Delete</ButtonDelete>
                </Top>
                
                    <h2>Places Visited</h2>
                
                <div>
                    <WorldView user={this.state.user}/>
                </div>
                <div>
                    Localsview
                </div>
            </ContainerTwo>
            </div>
        )
    }


}


export default UserShow
