import React, { Component } from 'react'
import Header from './styled-components/Header'
import { Link } from 'react-router-dom'
import { PageContainer} from './styled-components/Containers'
import { WorldSplash } from './styled-components/Splash'
import WorldsList from './WorldsList'
import Winterfell from '../images/Winterfell.jpg'

class WorldsPage extends Component {

    render() {
        return (
            <PageContainer>
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
                <div>
                    <WorldsList worlds={this.props.worlds}/>
                    
                </div>
            </PageContainer>
        )
    }
}


export default WorldsPage