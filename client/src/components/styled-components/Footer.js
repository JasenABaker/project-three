import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonFooterOne, ButtonFooterTwo} from './Buttons'




const StyleFooter = styled.footer`
    height: 30vh;
    width: 100vw;
    background-color:#D81E5B;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        color:#EFE9E7;
    }
`


class Footer extends Component {
    render(){
        return(
            <StyleFooter>
                <h1>Fantasy Destinations. Endless Possibilities</h1>
                <div>
                    <ButtonFooterOne>See Users</ButtonFooterOne>
                    <ButtonFooterTwo>See Worlds</ButtonFooterTwo>
                </div>
            </StyleFooter>

        )
    }

}


export default Footer