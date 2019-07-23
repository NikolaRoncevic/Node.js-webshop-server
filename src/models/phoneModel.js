const mongoose = require('mongoose')
const CommentSchema = require('./commentModel.js')

const Schema = mongoose.Schema;
const phoneSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    name: { type: String, required: true, dropDups: true },
    screenSize: { type: Number, required: true, min: 0 },
    processor: { type: String, required: true },
    graphicCard: { type: String, required: true },
    ramMemory: { type: String, required: true },
    producer: { type: String, enum: ['Samsung', 'Apple', 'LG', 'Huawvei'], required: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, required: true },
    numberOfPreviews: { type: Number, default: 0 },
    comments: { type: [CommentSchema], default: undefined },
    discounted: { type: Schema.Types.ObjectId, ref: 'Discount' }
})


const Phone = mongoose.model('Phone', phoneSchema)

module.exports = Phone