



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
router.post('/', (req,res)=> {
    const data = req.body
    console.log("Received New User:", data)
    const newUser = User.create(data)
    newUser.save().then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.error(err)
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


router.delete('/:userId', (req,res)=>{

    User.findByIdAndRemove(req.params.userId)
    .then(()=>{
        res.sendStatus(200)
    }).catch((err)=>{
        console.log(err)
    })

})



module.exports = router