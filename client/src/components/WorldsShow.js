import React from 'react'
import { WorldCardBig, PicHolderTwo, BottomCard } from './styled-components/Containers'
import { ButtonLink } from './styled-components/Buttons'
import { Link } from 'react-router-dom'


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
                <Link to={`/Worlds/${world._id}/Locations`} style={{textDecoration: 'none', color: 'WindowText'}}><ButtonLink>Locales</ButtonLink></Link>
            </BottomCard>
        </WorldCardBig>

    )
}

export default WorldsShow