const mongoose = require('mongoose');
const Phone = require('../models/phoneModel.js').Phone
const discountedPhone = require('../models/discountedPhonesModel.js')
mongoose.connect('mongodb://127.0.0.1:27017/testKolekcije', { useNewUrlParser: true });

const phone = new Phone({
    name: 'iphone3',
    screenSize: 10,
    processor: 'radeon',
    graphicCard: 'gtx1080',
    ramMemory: '16gb',
    producer: 'Apple',
    price: '15000',
    image: 'nema jos'
});



var discountedPhone1 = new discountedPhone({
    phone: phone,
    discounted: true,
    precentage: 30

})

discountedPhone1.save().then(() => {
    console.log('saved');
}).catch((error) => {

    console.log(error);
})