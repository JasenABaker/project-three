import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import WorldView from './WorldView'
import Header from './styled-components/Header'
import { PageContainer } from './styled-components/Containers'
import { ButtonDelete, ButtonEdit } from './styled-components/Buttons'
import { Home, World, User } from './styled-components/Icon'
import Footer from './styled-components/Footer'



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
    @media screen and (max-width: 800px){
        flex-direction: column;

        img {
            display:none;
        }
    }
`
const Head = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 3em;
        font-family: 'Risque', cursive;
        align-self: center;
        }

    h2 {
        font-size: .99em;
        font-family: 'Playfair Display', serif;
        font-style: italic;
    }
    @media screen and (max-width: 800px) {
        h1{
            font-size: 1.5em;
        }
        h2 {
            font-size: .8em;
            marign: 10px 10px;
        }
    }
`
const ButtonDiv = styled.div`
@media screen and (max-width: 800px){
    width: 100%;
    display: flex;
    justify-content: space-around;
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
                this.setState({ user: res.data, stateNotSet: false })
                // console.log(res.data)
            })
    }


    render() {
        const user = this.state.user
        return (

            this.state.stateNotSet ? <div></div> :

                (
                    <PageContainer>
                        {this.state.redirectToUser ? <Redirect to='/Users' /> : null}
                        <Header>
                            <h1>Fanta<span>See</span></h1>
                            <nav><ul>
                                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><li><Home /></li></Link>
                                <Link to='/Users' style={{ textDecoration: 'none', color: 'inherit' }}><li><User /></li></Link>
                                <Link to='/Worlds' style={{ textDecoration: 'none', color: 'inherit' }}><li><World /></li></Link>
                            </ul>
                            </nav>
                        </Header>
                        <Top>
                            <img src={user.photoUrl} alt={user.userName} />
                            <Head>
                            <h1>{user.userName}</h1>
                            <h2>{user.testimonial}</h2>
                            </Head>
                            <ButtonDiv>
                                <Link to={`/Users/${this.props.match.params.userId}/edit`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ButtonEdit>Edit</ButtonEdit></Link>
                                <ButtonDelete onClick={() => { this.deleteUser() }}>Delete</ButtonDelete>
                            </ButtonDiv>
                        </Top>

                        <h2>Worlds Visited</h2>

                        <WorldView worlds={this.state.user.worldsVisited} />

                        <Footer />
                    </PageContainer>
                )

        )
    }
}

export default UserShow
