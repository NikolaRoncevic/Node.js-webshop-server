const mongoose = require('mongoose');
const Phone = require('../models/phoneModel.js')
const discountedPhone = require('../models/discountedPhoneModel.js')
mongoose.connect('mongodb://127.0.0.1:27017/test3', { useNewUrlParser: true });

/* const phone = new Phone({
    phoneId: 8,
    name: 'iphone8',
    screenSize: 10,
    processor: 'radeon',
    graphicCard: 'gtx1060',
    ramMemory: '16gb',
    producer: 'Apple',
    price: '15000',
    image: 'nema jos'
});
console.log('jebeni telefon id:  ' + phone.phoneId);



var discountedPhone1 = new discountedPhone({
    phoneId: phone.phoneId,
    discounted: true,
    precentage: 30

})
phone.save().then(() => {
    console.log('saved');
}).catch((error) => {

    console.log(error);
})

discountedPhone1.save().then(() => {
    console.log('saved');
}).catch((error) => {

    console.log(error);
}) */