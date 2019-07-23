const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Discount = new mongoose.model('Discount', {
    _id: { type: Schema.Types.ObjectId },
    discountPrecentage: { type: Number, requred: true }
})

module.exports = Discount