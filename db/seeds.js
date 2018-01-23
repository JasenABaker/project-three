require('dotenv').config()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise


const User = require('./models/User')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${error}
    `)
    process.exit(-1)
})





User.remove({}).then(() => {
    const jasenBaker = new User({
        userName: 'Novemberist',
        firstName: 'Jasen',
        lastName: 'Baker',
        home: 'Georgia, USA',
        numberOfTrips: 4,
        photoUrl: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/19224992_10154389810307127_8105888593912301500_n.jpg?oh=829d164640ef2a2856129691823d2f39&oe=5AE15440'
    })

    return jasenBaker.save()
}).then(() => {
    const nintiChance = new User({
        userName: 'Minti',
        firstName: 'Ninti',
        lastName: 'Chance',
        home: 'Georgia, USA',
        numberOfTrips: 3,
        photoUrl: "https://media-exp2.licdn.com/media/AAMAAQDGAAwAAQAAAAAAAA6-AAAAJGU2Yjk2OGQ5LWEyZTMtNGUwOS05NTMxLWUyMDlkYTM0MDliMg.jpg"
    })
    return nintiChance.save()
}).then(() => {

    const timTurnquist = new User({
        userName: 'TallNord',
        firstName: 'Tim',
        lastName: 'Turnquist',
        home: 'Georgia, USA',
        numberOfTrips: 5,
        photoUrl: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/18556054_10103644972677661_4371251815775200258_n.jpg?oh=9c89e51a32954ff7c5b693d862d1888e&oe=5AF1E7D1'
    })
    return timTurnquist.save()
}).catch((err)=>{
    console.log('ERROR SEEDING DATA!!')
    console.log(err)
}).then(()=>{
    mongoose.connection.close()

    console.log(`Finished seeding database...
    
    Disconnected from MongoDB`)
})
