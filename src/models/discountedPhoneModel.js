const mongoose = require('mongoose')

const DiscountedPhoneModel = new mongoose.model('DiscountedPhoneModel', {
    phoneId: {
        type: Number,
        unique: true
    },
    discounted: {
        type: Boolean,
        required: true,
        default: false
    },
    discountPrecentage: {
        type: Number,
        required: true,
        default: 20,
        min: 0,
        max: 100

    }
})

module.exports = DiscountedPhoneModel