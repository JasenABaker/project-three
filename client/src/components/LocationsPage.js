import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { PageContainer, ContainerTwoSmall } from './styled-components/Containers'
import { WorldSplash, HeaderThree } from './styled-components/Splash'
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
            this.setState({world: res.data, stateNotSet: false})

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
                <HeaderThree>
                    <h1>Fanta<span>See</span></h1>
                    <nav><ul>
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><li><Home /></li></Link>
                        <Link to='/Worlds' style={{ textDecoration: 'none', color: 'inherit' }}><li><World /></li></Link>
                        <Link to='/Users' style={{ textDecoration: 'none', color: 'inherit' }}><li><User /></li></Link>
                    </ul>
                    </nav>
                </HeaderThree>
                <WorldSplash>
                    <h2>{world.worldName} Locations</h2>
                    <img src={world.photoUrl} alt={world.seriesFrom}/>
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