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
        tripAbout:{
            type: String,
            required: true,
            default: 'We offer trips to a variety of locals in this world.'
        },
        photoUrl: {
            type: String,
            required: false,
            default: 'http://t3.gstatic.com/images?q=tbn:ANd9GcRdt-j1kozfrgvimYYVKAJfew7BDnLiaGTolktzVZFRM4Qgfc9l'
        },
        mapUrl: {
            type: String,
            required: false,
            default: 'https://img00.deviantart.net/99b4/i/2013/005/c/9/middle_earth_map_by_kethwyn2013-d5qih1p.jpg'
        },
        locations: []
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
        testimonial:{
            type: String,
            required: false,
            default: `This was the best trip of my life`
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
        worldsVisited: [WorldsSchema],
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