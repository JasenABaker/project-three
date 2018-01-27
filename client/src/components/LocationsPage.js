import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { PageContainer, ContainerTwoSmall } from './styled-components/Containers'
import { WorldSplash, HeaderTwo } from './styled-components/Splash'
import { Home, World, User } from './styled-components/Icon'
import Footer from './styled-components/Footer'


class LocationsPage extends Component {
    state ={
        world: {},
        stateNotSet: true
    }

    componentWillMount () {
        axios.get(`/api/Worlds/${this.props.match.params.worldId}`)
        .then((res)=>{
            console.log(res.data)
            this.setState({world: res.data})

        }).catch((err)=>{
            console.log(err)
        })
    }

    render() {
        const world = this.state.world
        return (

            this.state.stateNotSet ? <div></div> :
            (
            <PageContainer>
                <HeaderTwo>
                    <h1>Fanta<span>See</span></h1>
                    <nav><ul>
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><li><Home /></li></Link>
                        <Link to='/Worlds' style={{ textDecoration: 'none', color: 'inherit' }}><li><World /></li></Link>
                        <Link to='/Users' style={{ textDecoration: 'none', color: 'inherit' }}><li><User /></li></Link>
                    </ul>
                    </nav>
                </HeaderTwo>
                <WorldSplash>
                    <h2></h2>
                    
                </WorldSplash>

                <div>
                    

                </div>
                <Footer />
            </PageContainer>

            )

        )
    }




}

export default LocationsPage