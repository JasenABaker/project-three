import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                        <Link to='/Users/new' style={{textDecoration: 'none', color: 'inherit'}}><li>New User</li></Link>
                        <li>Worlds</li>
                    </ul>
                    </nav>
                </Header>
                <Splash>
                    <img src={landscape} alt="landscape" />
                    <Link to='/Users' style={{ textDecoration: 'none', color: 'inherit' }}><a>Users</a></Link>
                </Splash>

            </div>
        )
    }
}


export default HomePage