import React from 'react'
import Worlds from './Worlds'
import { ContainerThree } from './styled-components/Containers'


const WorldView = (props) => {

    console.log(props.worlds)
        return (
            <ContainerThree>
                { 
                    props.worlds.map((world) => {
                        //console.log(props.user.worldsVisited)
                        return (
                            <Worlds world={world} {...props} key={world._id} index={world._id} />
                        )
                    })
                }
                
            </ContainerThree>
        )

    }

export default WorldView
