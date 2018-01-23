import React from 'react'
import styled from 'styled-components'
import User from './User'

const Container = styled.data `
    height: 75vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`



const UserList = (props) => {
    console.log(props)
        return(
            <Container>
                {
                    props.users.map((user)=>{
                        return (
                            <User user={user} {...props} key={user._id} index={user.id}/>
                        )
                    })
                }
            
            </Container>
        )
}




export default UserList