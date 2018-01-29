const express = require('express')
const Worlds = require('../db/models/World')
const router = express.Router({mergeParams: true})


router.get('/', (req,res)=>{
    const worldId = req.params.worldId

    Worlds.findById(worldId).then((world)=>{
        res.json(world)
    }).catch((err)=>{
        console.error(err)
    })
})

router.get('/:LocationsId', (req,res)=>{
    const worldId = req.params.worldId
    const locationId = req.params.LocationsId

    Worlds.findById(worldId).then((world)=>{
        const location = world.locations.id(locationId)

        res.json(location)
    }).catch((err)=>{
        console.error(err)
    })
})


module.exports= router