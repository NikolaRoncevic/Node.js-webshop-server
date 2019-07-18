const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Comment = new Schema({
    text: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: 'Comment'
    }
})

module.exports = Comment;