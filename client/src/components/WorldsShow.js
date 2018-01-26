import React from 'react'
import { WorldCardBig, PicHolderTwo, BottomCard, BottomBottomCard, PicHolderThree } from './styled-components/Containers'


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
                <BottomBottomCard>
                <PicHolderThree>
                <img src={world.novelCover} alt={world.seriesFrom} />
                </PicHolderThree>
                <div>
                <p><span>From:</span> {world.seriesFrom}</p>
                </div>
                </BottomBottomCard>
                <p>{world.description}</p>
            </BottomCard>
        </WorldCardBig>

    )
}

export default WorldsShow