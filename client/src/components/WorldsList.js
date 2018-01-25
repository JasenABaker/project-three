import React from 'react'
import {ContainerOneSmall} from './styled-components/Containers'
import WorldsShow from './WorldsShow'




const WorldsList = (props) =>{
    return(
        <ContainerOneSmall>
            {
                props.worlds.map((world)=>{
                    return(
                    <WorldsShow world={world} {...props} key={world._id} index={world._id} />
                )})
            
            }
        </ContainerOneSmall>

    )
}


export default WorldsList