import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const UserCard = styled.div`
    height: 65vh;
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;

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
    overflow: hidden;


    img{
        height: 100%;
        width: auto;
        border-radius: 50%;
    }
    
`

const Line = styled.div`
    height: 4px;
    width: 70%;
    background-color:#292F36;

`



const User = (props, index) => {

    return (
        <Link to={`/Users/${props.user._id}`} style={{textDecoration: 'none', color: 'WindowText'}}>
            <UserCard>
                <ImgDiv>
                    <img src={props.user.photoUrl} alt={props.user.userName} />
                </ImgDiv>
                <h3>{props.user.userName}</h3>
                <Line />
                <div>
                    <h4>Name</h4> <p>{props.user.firstName} {props.user.lastName}</p>
                    <h4>From</h4> <p>{props.user.home}</p>
                    <h4>Number of Trips:</h4> <p>{props.user.numberOfTrips}</p>
                </div>
            </UserCard>
        </Link>
    )

}

export default User