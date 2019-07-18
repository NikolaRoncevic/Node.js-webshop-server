const mongoose = require('mongoose')
const CommentSchema = require('./commentModel.js')

const Schema = mongoose.Schema;
const phoneSchema = new Schema({
    phoneId: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true

    },
    screenSize: {
        type: Number,
        required: true,
        min: 0
    },
    processor: {
        type: String,
        required: true
    },
    graphicCard: {
        type: String,
        required: true
    },
    ramMemory: {
        type: String,
        required: true
    },
    producer: {
        type: String,
        enum: ['Samsung', 'Apple', 'LG', 'Huawvei'],
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        required: true

    },
    comments: { //dodavanje komentara 
        type: [CommentSchema],
        default: undefined

    }
})


const Phone = mongoose.model('Phone', phoneSchema)

module.exports = { Phone, phoneSchema }