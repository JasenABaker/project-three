const mongoose = require('mongoose')
const Schema = require('../Schema')


const Location = mongoose.model('Location', Schema.LocationsSchema)

module.exports = Location