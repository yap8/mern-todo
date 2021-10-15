const { Schema, model } = require('mongoose')

const todoSchema = new Schema({
  text: {
    type: String
  },
  status: {
    type: String
  },
  dateAdded: {
    type: String,
    default: Date.now
  }
})

module.exports = model('Todo', todoSchema)
