import React from 'react'
import styled from 'styled-components'
import Worlds from './Worlds'

const Container = styled.div`
    height: 30vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`


const WorldView = (props) => {
console.log(props)
    return (
        <Container>
            {
                // props.user.worldsVisited.map((world) => {
                //     console.log(props.user.worldsVisited)
                //     return(
                //         <Worlds world={world} {...props} key={world._id} index={world._id}/>
                //     )
                // })
            }
        </Container>
    )


}

export default WorldView
