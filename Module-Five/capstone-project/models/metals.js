const mongoose = require('mongoose')
const Schema = mongoose.Schema

const metalsSchema = new Schema({
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
    meltingPoint:{
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
})

module.exports = mongoose.model('Metal', metalsSchema)