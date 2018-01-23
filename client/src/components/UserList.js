import React, { Component } from 'react'
import styled from 'styled-components'


const Container = styled.data `
    height: 75vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`



const UserList = (props) => {
    
        return(
            <Container>
                {
                    props.users.map((user)=>{
                        return (
                            <User user={user} {...props} key={user.id}/>
                        )
                    })
                }
            
            </Container>
        )
}




export default UserList