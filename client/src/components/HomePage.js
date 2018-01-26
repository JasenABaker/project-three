import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import landscape from '../images/landscape.jpg'
import Header from './styled-components/Header'
import {Splash, ButtonText} from './styled-components/Splash'
import { Button } from './styled-components/Buttons'



class HomePage extends Component {

    render() {
        return (
            <div>
                <Header>
                    <h1>Fanta<span>See</span></h1>
                    <nav><ul>
                        <li>Home</li>
                        <Link to='/Users/new' style={{textDecoration: 'none', color: 'inherit'}}><li>New User</li></Link>
                        <Link to='/Worlds' style={{textDecoration: 'none', color: 'inherit'}}><li>Worlds</li></Link>
                    </ul>
                    </nav>
                </Header>
                <Splash>
                    <img src={landscape} alt="landscape" />
                    <ButtonText>
                    <h2> Are you prepared for an adventure of a lifetime?</h2>
                    <p> With FantaSee, the vacation of your wildest fantasies is finally within reach.
                    Our service provides you with the once in a lifetime opportunity to visit the worlds of your favorite fantasy 
                    novel. With our proprietary technology, we can offer dream packages to a variety of locations from popular fantasy literature.
                    (proprietary technology coming soon)
                    </p>
                    <Link to='/Users' style={{ textDecoration: 'none', color: 'inherit' }}><Button>Users</Button></Link>
                    </ButtonText>
                </Splash>

            </div>
        )
    }
}


export default HomePage