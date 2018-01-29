import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import {HeaderThree} from './styled-components/Splash'
import { PageContainer } from './styled-components/Containers'
import { ButtonDelete, ButtonEdit } from './styled-components/Buttons'
import { Home, World, User } from './styled-components/Icon'
import Footer from './styled-components/Footer'


class Location extends Component {
    state = {
        location: {},
        stateNotSet: false
    }

    render() {
        return (
            this.state.stateNotSet ? <div></div> :
                (
                    <HeaderThree>
                        <h1>Fanta<span>See</span></h1>
                        <nav><ul>
                            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><li><Home /></li></Link>
                            <Link to='/Users' style={{ textDecoration: 'none', color: 'inherit' }}><li><User /></li></Link>
                            <Link to={`/Worlds/${this.props.match.params.worldId}/Locations`} style={{ textDecoration: 'none', color: 'inherit' }}><li><World /></li></Link>
                        </ul>
                        </nav>
                    </HeaderThree>
                )
        )

    }
}

export default Location