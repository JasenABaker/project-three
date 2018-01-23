import React from 'react'
import styled from 'styled-components'

const UserCard = styled.div`
    height: 60vh;
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h3{
        font-family: 'Risque', cursive;
        font-style: italic;
    }
    &:hover{
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26), 0 3px 6px rgba(0, 0, 0, 0.33)
    }
`
const ImgDiv = styled.div`
    height: 200px;
    width: 200px;


    img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
    
`

const Line = styled.div`
    height: 4px;
    width: 70%;
    background-color:#292F36;

`



const User = (props) => {

    return (
        <UserCard>
        <ImgDiv>
        <img src={props.user.photoUrl} alt= {props.user.userName} />
        </ImgDiv>
        <h3>{props.user.userName}</h3>
        <Line/>
        <div>
        <p><span>Name:</span> {props.user.firstName} {props.user.lastName}</p>
        <p><span>From: </span> {props.user.home}</p>
        <p><span>Number of Trips:</span> {props.user.numberOfTrips}</p>
        </div>
        </UserCard>
    )
}

export default User