import React, { Component } from 'react'
import Header from './styled-components/Header'
import { Link } from 'react-router-dom'
import { WorldSplash } from './styled-components/Splash'
import Winterfell from '../images/Winterfell.jpg'

class WorldsPage extends Component {

    render() {
        return (
            <div>
                <Header>
                    <h1>Fanta<span>See</span></h1>
                    <nav><ul>
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><li>Home</li></Link>
                    </ul>
                    </nav>
                </Header>
                <WorldSplash>
                    <h2>Popular Worlds</h2>
                    <img src={Winterfell} alt="Winterfall" />
                </WorldSplash>
            </div>
        )
    }
}


export default WorldsPage