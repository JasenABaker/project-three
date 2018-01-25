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
export const ContainerOneColumn = ContainerOne.extend`
    flex-direction: column;
`
export const FormContainer = styled.div`
    height: 60vh;
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


export default { ContainerOne, ContainerTwo, ContainerOneColumn, FormContainer, FormEdit }