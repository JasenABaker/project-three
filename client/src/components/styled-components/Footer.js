import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonFooterOne, ButtonFooterTwo } from './Buttons'
import { Link } from 'react-router-dom'




const StyleFooter = styled.footer`
    margin-top: auto;
    height: 30vh;
    width: 100vw;
    background-color:#D81E5B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        color:#EFE9E7;
    }
    @media screen and (max-width: 800px) {
        height: 20vh;
        h1{
            font-size: .9em;
        }
    }
`

const ButtonDiv = styled.div`
    height: 40%;
    width: 50%;
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`


class Footer extends Component {
    render() {
        return (
            <StyleFooter>
                <h1>Fantasy Destinations. Endless Possibilities</h1>
                <ButtonDiv>
                    <Link to='/Users' style={{ textDecoration: 'none', color: 'inherit' }}><ButtonFooterOne>See Users</ButtonFooterOne></Link>
                    <Link to='/Worlds' style={{ textDecoration: 'none', color: 'inherit' }}><ButtonFooterTwo>See Worlds</ButtonFooterTwo></Link>
                </ButtonDiv>
            </StyleFooter>

        )
    }

}


export default Footer