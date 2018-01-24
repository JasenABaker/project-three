const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const WorldsSchema = new Schema (
    {
        worldName: {
            type: String,
            required: true,
            unique: true,
            sparse: true
        },
        seriesFrom: {
            type: String,
            required: true,
            unique: false,
        },
        description: {
            type: String,
            required: true,
            default: 'A Fantasy World of unimaginable wonder!'
        },
        novelCover: {
            type: String,
            required: false,
            default: 'http://t3.gstatic.com/images?q=tbn:ANd9GcRdt-j1kozfrgvimYYVKAJfew7BDnLiaGTolktzVZFRM4Qgfc9l'
        }
    },
    {
        timestamps: {}
    }
)

const UserSchema = new Schema (
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            sparse: true,
        },
        firstName: {
            type: String,
            required: true,
            unique: false,
        },
        lastName: {
            type: String,
            required: true,
            unique: false,
        },
        home: {
            type: String,
            required: false,
            default: 'The real world',
            unique: false
        },
        numberOfTrips: {
            type: Number,
            required: false,
            default: 0,
            unique: false,
        },
        photoUrl:{
            type: String,
            required: false,
            default: 'https://www.ttmf-mortgages.com/wordpress/wp-content/uploads/2014/01/happy-vacation-man.jpg'
        },
        wordsVisited: [WorldsSchema],
        locationsVisited: []
    },
    {
        timestamps: {}
    }
)

module.exports = {
    UserSchema,
    WorldsSchema
}