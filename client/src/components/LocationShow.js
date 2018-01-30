import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import {HeaderThree} from './styled-components/Splash'
import { PageContainer, ContainerOneSimple } from './styled-components/Containers'
import { ButtonDelete, ButtonEdit } from './styled-components/Buttons'
import { Home, World, User } from './styled-components/Icon'
import Footer from './styled-components/Footer'

const LeftSide = styled.div`
    height: 70vh;
    width: 30%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-right: 10px;

    h2{
        align-self: flex-start;
        margin-bottom: 0;
        font-family: 'Risque', cursive;
    }
    h3{
        margin: 0;
        font-size: .9em;
        font-style: italic;
        color:#9DA0A3;
    }
    @media screen and (max-width: 800px){
        height: 50vh;
        width: 100%;
        margin: 0 10px 0 20px;

    }

`
const RightSide = styled.div`
    height: 50vh;
    width: 20%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    span{
        font-weight: bold;
    }

    @media screen and (max-width: 800px) {
        height: 70vh;
        width: 100%;
        flew-wrap: wrap;
        marign-left: 0px;
        margin-top: 0px;
    }

`

const Line = styled.div`
    margin: 0;
    height: 1px;
    width: 100%;
    background-color:#9DA0A3;
`
const ImgHolder = styled.div`
    height: 60%;
    width: 100%;
    overflow: hidden;

    img{
        height: 100%;
        width: auto;
    }
    @media screen and (max-width: 800px){
        display: none;
    }
`


class Location extends Component {
    state = {
        location: {},
        stateNotSet: true
    }

    componentWillMount(){

        console.log(this.props.match.params.LocationsId)
        axios.get(`/api/Worlds/${this.props.match.params.worldId}/Locations/${this.props.match.params.LocationsId}`)
        .then((res)=>{
            console.log(res.data)
            this.setState({location: res.data, stateNotSet: false})
            
        })
    }
    render() {
        const location = this.state.location
        return (
            this.state.stateNotSet ? <div></div> :
                (
                <PageContainer>
                    <HeaderThree>
                        <h1>Fanta<span>See</span></h1>
                        <nav><ul>
                            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><li><Home /></li></Link>
                            <Link to='/Users' style={{ textDecoration: 'none', color: 'inherit' }}><li><User /></li></Link>
                            <Link to={`/Worlds/${this.props.match.params.worldId}/Locations`} style={{ textDecoration: 'none', color: 'inherit' }}><li><World /></li></Link>
                        </ul>
                        </nav>
                    </HeaderThree>
                    <ContainerOneSimple>
                    <LeftSide>
                    <h2>{location.locationName}</h2>
                    <h3>{location.duration} days</h3>
                    <h3>Price: ${location.price}</h3>
                    <p>{location.shortDescription}</p>
                    <Line />
                    <p>{location.longDescription}</p>
                    <ImgHolder>
                    <img src={location.photoUrl} alt={location.locationName} />
                    </ImgHolder>
                    </LeftSide>
                    <RightSide>
                            { location.itinerary.map((day, index)=>{
                                return (
                                    <p>Day {index + 1}:<span> {day}</span></p>
                                )
                            })

                            }
                    </RightSide>
                </ContainerOneSimple>
                <Footer />
                </PageContainer>
                )
        )

    }
}

export default Location