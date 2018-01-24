

const express = require('express')
const User = require('../db/models/User')
const router = express.Router()


router.get('/', (req,res)=>{
    User.find({}).then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err)
    })
})

router.get('/:userId', (req,res)=>{
    const userId = req.params.userId

    User.findById(userId).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports = router