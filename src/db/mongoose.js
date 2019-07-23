const mongoose = require('mongoose');
const Phone = require('../models/phoneModel.js')
const Discount = require('../models/discountModel.js')
const PhoneCollection = require('../models/phoneCollectionModel.js')

mongoose.connect('mongodb://127.0.0.1:27017/testPopulate', { useNewUrlParser: true });
const app = 'Apple';
const sams = 'Samsung';
const hua = 'Huawvei';
const lg = 'LG';

const rade = 'radeon';
const intel = 'intel';

const gt60 = 'gtx1060';
const gt70 = 'gtx1070';
const gt80 = 'gtx1080';

const ram16 = '16gb';
const ram32 = '32gb';
const ram8 = '8gb';

const discount20 = "5d360187d62bbb514804b3b7";
const discount30 = "5d36018da4b4be306ccf018c";

const discount = new Discount({
    _id: new mongoose.Types.ObjectId(),
    discountPrecentage: 50
})

const phoneCollection = new PhoneCollection({
    _id: new mongoose.Types.ObjectId(),
    title: 'Discounted Products',
    description: 'So cheap must buy',
    phones: ["5d3602cab0ee18444817f39d", "5d36035af5e91c509c39f446", "5d36035af5e91c509c39f44c"]
})

//phoneCollection.save().then(() => console.log('saved')).catch((error) => console.log(error))

/*const phone = new Phone({
    name: 'iphone 5',
    screenSize: 10,
    processor: rade,
    graphicCard: gt80,
    ramMemory: ram32,
    producer: 'Apple',
    price: '15000',
    image: 'nema jos',
    discounted: discount20
});*/


PhoneCollection.
findOne({}).
populate({
    path: 'phones',
    populate: { path: 'discounted' }
}).
exec(function(err, phone) {
    if (err) return handleError(err);
    for (p of phone.phones) {
        console.log(p.discounted)
    }
    // prints "The author is Ian Fleming"
});

//phone.save().then(() => console.log('saved')).catch((error) => console.log(error))