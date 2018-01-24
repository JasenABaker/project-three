const mongoose = require('mongoose')
const Schema = require('../Schema')


const World = mongoose.model('World', Schema.WorldsSchema)

module.exports = Worlds