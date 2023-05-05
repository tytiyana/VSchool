const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  upvote: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  downvote: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Issue", issueSchema)