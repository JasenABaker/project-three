import React from 'react'
import styled from 'styled-components'


export const PageContainer = styled.div`
    height: 200vh;
    width: 100vw;
    display: flex;
    flex-direction: column;

    h2{
        align-self: center;
    }

`
export const ContainerOne = styled.div`
margin-top: 30px;
height: 75vh;
width: 100vw;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`
export const ContainerOneSmall = ContainerOne.extend`
    height: 55vh;
`
export const ContainerTwo = styled.div`
    height: 75vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    h2{
        align-self: center;
    }
`
export const ContainerThree = styled.div`
    height: 80vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`
export const ContainerOneColumn = ContainerOne.extend`
    flex-direction: column;
`
export const FormContainer = styled.div`
    height: 70vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #86CB92;
    border: 2px solid #292F36;
`

export const FormEdit = FormContainer.extend`
    background-color:#256EFF;
`

export const WorldCard = styled.div`
height: 100%;
width: 20%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 2px solid #292F36;
`

export const PicHolder = styled.div`
    height: 45%;
    width: 90%;
    border: 1px solid black;
    overflow: hidden;
    background-color: black;
    
    img {
        height: 100%;
        width: auto;
    }
`
export const BottomCard = styled.div`
    height: 45%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: .7em;
        width: 90%;
    }
`

export default { PageContainer, ContainerOne, ContainerTwo, ContainerOneColumn, FormContainer, FormEdit, ContainerThree, WorldCard, PicHolder, BottomCard }