import React from 'react'
import styled from 'styled-components'
import User from './User'
import { ContainerOne } from './styled-components/Containers'



const UserList = (props) => {
//console.log(props)
        return(
            <ContainerOne>
                {
                    props.users.map((user)=>{
                        return (
                            <User user={user} {...props} key={user._id} index={user._id}/>
                        )
                    })
                }
            
            </ContainerOne>
        )
}




export default UserList