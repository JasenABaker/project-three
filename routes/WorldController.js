const express = require('express')
const Worlds = require('../db/models/World')
const router = express.Router({mergeParams: true})


router.get('/', (req,res)=>{
    Worlds.find({}).then((worlds)=>{
        res.json(worlds)
    }).catch((err)=>{
        console.log(err)
    })
})


router.post('/', (req,res)=>{
    const data = req.body
    const newWorld = Worlds.create(data)
    .then((world)=>{
        res.json(world)
    }).catch((err)=>{
        console.error(err)
    })
})

router.get('/:worldId', (req,res)=>{
    const worldId = req.params.worldId

    Worlds.findById(worldId).then((world)=>{
        res.json(world)
    }).catch((err)=>{
        console.error(err)
    })
})

router.get('/:worldId/Locations/:LocationsId', (req,res)=>{
    const worldId = req.params.worldId
    const locationsId =req.params.LocationsId

    Worlds.findById(worldId).then((world)=>{
        const location = world.locations.id(locationsId)

        res.json(location)
    }).catch((err)=>{
        console.error(err)
    })
})

router.patch('/:worldId', (req,res)=>{
    const worldUpdate = req.body
    const worldId = req.params.worldId

    Worlds.findByIdAndUpdate(worldId, worldUpdate).then((world)=>{
        res.json(world)
    }).catch((err)=>{
        console.error(err)
    })
})

router.delete('/:worldId', (req, res)=>{
    const worldId = req.params.worldId
    
    Worlds.findByIdAndRemove(worldId).then(()=>{
        res.sendStatus(200)
    }).catch((err)=>{
        console.error(err)
    })
})

module.exports = router