import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PageContainer,ContainerTwoSmall} from './styled-components/Containers'
import { WorldSplash, HeaderTwo } from './styled-components/Splash'
import WorldsList from './WorldsList'
import Winterfell from '../images/Winterfell.jpg'

class WorldsPage extends Component {

    render() {
        return (
            <PageContainer>
                <HeaderTwo>
                    <h1>Fanta<span>See</span></h1>
                    <nav><ul>
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><li>Home</li></Link>
                    </ul>
                    </nav>
                </HeaderTwo>
                <WorldSplash>
                    <h2>Popular Worlds</h2>
                    <img src={Winterfell} alt="Winterfall" />
                </WorldSplash>
                <ContainerTwoSmall>
                <p>We help fantasy enthusiast experience the worlds of their imaginations, offer the opportunity to take part in the stories that the stories that they love.</p>
                </ContainerTwoSmall>
                <div>
                    <WorldsList worlds={this.props.worlds}/>
                    
                </div>
            </PageContainer>
        )
    }
}


export default WorldsPage