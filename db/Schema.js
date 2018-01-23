const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

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
        wordsVisited: [],
        locationsVisited: []
    },
    {
        timestamps: {}
    }
)

module.exports = {
    UserSchema
}