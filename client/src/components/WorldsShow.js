import React from 'react'
import { WorldCardBig, PicHolderTwo, BottomCard} from './styled-components/Containers'
import { ButtonLink } from './styled-components/Buttons'


const WorldsShow = (props) => {
    console.log(props)
    const world = props.world
    return (

        <WorldCardBig>
            <PicHolderTwo>
                <img src={world.mapUrl} alt={world.worldName} />
            </PicHolderTwo>
            <BottomCard>
                <h2>{world.worldName}</h2>
                <h3><span>From:</span> {world.seriesFrom}</h3>
                <p>{world.tripAbout}</p>
            </BottomCard>
            <ButtonLink>Locales</ButtonLink>
        </WorldCardBig>

    )
}

export default WorldsShow