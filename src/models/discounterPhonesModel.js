const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//neka glupost samo da vidim kako ide ovo
const Phone = new Schema({ name: 'string' })

const discountedPhone = mongoose.model('discountedPhone', {
    phone: {
        type: [Phone],
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
        min: 0,
        max: 100

    }
})

module.exports = discountedPhone