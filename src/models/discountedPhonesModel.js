const mongoose = require('mongoose');
const phone = require('./phoneModel')
const Schema = mongoose.Schema;

//neka glupost samo da vidim kako ide ovo


const discountedPhone = mongoose.model('discountedPhone', {
    phone: {
        type: phone.phoneSchema,
        required: true
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

module.exports = discountedPhone