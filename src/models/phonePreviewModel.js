const mongoose = require('mongoose');
const phone = require('./phoneModel')
const Schema = mongoose.Schema;

const phonePreview = new mongoose.model('phonePreview', {
    phoneId: {
        type: Number,
        required: true,
        unique: true
    },
    numberOfPreviews: {
        type: Number,
        default: 0
    }
})