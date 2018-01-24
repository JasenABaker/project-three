import React from 'react'
import styled from 'styled-components'

export const ContainerOne = styled.div`
height: 75vh;
width: 100vw;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`
export const ContainerTwo = styled.div`
    height: 85vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    h2{
        align-self: center;
    }
`


export  default { ContainerOne, ContainerTwo }