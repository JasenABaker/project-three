import React from 'react'

import { WorldCard, PicHolder, BottomCard } from './styled-components/Containers'


const Worlds = (props) => {
    const world = props.world
    return (

        <WorldCard>
            <PicHolder>
                <img src={world.mapUrl} alt={world.worldName} />
            </PicHolder>
            <BottomCard>
                <h2>{world.worldName}</h2>
                <p>{world.description}</p>
            </BottomCard>
        </WorldCard>

    )



}

export default Worlds