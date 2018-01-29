import React from 'react'
import { WorldCard, PicHolder, BottomCard } from './styled-components/Containers'



const Location = (props)=>{
    const location = props.location
    return(

        <WorldCard>
            <PicHolder>
                <img src={location.photoUrl} alt={location.locationName} />
            </PicHolder>
            <BottomCard>
                <h2>{location.locationName}</h2>
                <p>{location.shortDescription}</p>
            </BottomCard>
        </WorldCard>
    )
}

export default Location