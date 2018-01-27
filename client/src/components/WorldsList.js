import React from 'react'
import {ContainerOne} from './styled-components/Containers'
import WorldsShow from './WorldsShow'




const WorldsList = (props) =>{
    return(
        <ContainerOne>
            {
                props.worlds.map((world)=>{
                    return(
                    <WorldsShow world={world} {...props} key={world._id} index={world._id} />
                )})
            
            }
        </ContainerOne>

    )
}


export default WorldsList