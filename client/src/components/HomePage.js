import React, { Component } from 'react'
import styled from 'styled-components'
import landscape from '../images/landscape.jpg'
import Header from './styled-components/Header'
import Splash from './styled-components/Splash'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header>
                    <h1>Fanta<span>See</span></h1>
                    <nav><ul>
                        <li>Home</li>
                        <li>Users</li>
                        <li>Worlds</li>
                    </ul>
                    </nav>
                </Header>
                <Splash>
                    <img src={landscape} alt="landscape" />
                    <a>Users</a>
                </Splash>

            </div>
        )
    }
}


export default HomePage