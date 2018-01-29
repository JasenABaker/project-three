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


module.exports= router