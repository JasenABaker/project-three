import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { LocationCard, PicHolderFour, MiddleCard } from './styled-components/Containers'

const A = styled.div`
    height: 90%;
    width: 10%;
    font-size: 3em;
    color: #9DA0A3;

`


const Location = (props)=>{
    const location = props.location
    return(

        <LocationCard>
            <PicHolderFour>
                <img src={location.photoUrl} alt={location.locationName} />
            </PicHolderFour>
            <MiddleCard>
            
                <h4>{location.duration} days</h4>
                <h3>{location.locationName}</h3>
                <p>{location.shortDescription}</p>
                
            </MiddleCard>
            <Link to={`/Worlds/${props.world}/Locations/${location._id}`} style={{textDecoration: 'none', color: 'WindowText'}}> <A>></A> </Link>
        </LocationCard>
    )
}

export default Location