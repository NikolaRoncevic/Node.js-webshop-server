const mongoose = require('mongoose')

const HomePage = new mongoose.model('HomePage', {
    _id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String },
    description: { type: String },
    phoneCollections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PhoneCollection' }]
})

module.exports = HomePage