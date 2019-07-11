const mongoose = require('mongoose');
const phone = require('./phoneModel')
const Schema = mongoose.Schema;

const phonePreview = new mongoose.model('phonePreview', {
    phone: {
        type: phone.phoneSchema,
        required: true
    },
    numberOfPreviews: {
        type: Number,
        default: 0
    }
})