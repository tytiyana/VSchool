const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mineralSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true
    },
    yearDiscovered: {
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    mohsHardness:{
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Mineral', mineralSchema)