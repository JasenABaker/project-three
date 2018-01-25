const express = require('express')
const Worlds = require('../db/models/World')
const router = express.Router()


router.get('/', (req,res)=>{
    Worlds.find({}).then((worlds)=>{
        res.json(worlds)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router