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
const phone1 = undefined;
try {
    phone1 = Phone.find({ _id: '5d2701b5c37b2644c4141aae' })

} catch (e) {
    console.log(e);
}
const discountedPhone1 = new discountedPhone({
    phone: phone1,
    discounted: true,
    precentage: 30

})