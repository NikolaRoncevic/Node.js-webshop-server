const mongoose = require('mongoose')

const PhoneCollection = new mongoose.model('PhoneCollection', {
    _id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String },
    description: { type: String },
    phones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Phone' }]
})

module.exports = PhoneCollection