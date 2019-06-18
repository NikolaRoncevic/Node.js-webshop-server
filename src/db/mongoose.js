const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true });

/* const Test = mongoose.model('Test', {
    name: {
        type: String
    }
})

const something = new Test({
    name: 'test'
});
something.save().then((test) => {
    console.log(test);
}).catch((error) => {
    console.log(error);
}) */

/* const Samsung = new Phone({
    name: 'Gwtertert ' + Math.random(),
    screenSize: 15.6,
    processor: 'i7 7700',
    graphicCard: 'gtx1050',
    producer: 'Samsung',
    price: 20000
});
const Apple = new Phone({
    name: 'iphone 6ertertert' + Math.random(),
    screenSize: 15.6,
    processor: 'i7 7700',
    graphicCard: 'gtx1050',
    producer: 'Apple',
    price: 20000
});
const Lg = new Phone({
    name: 'LG good ertertertert' + Math.random(),
    screenSize: 15.6,
    processor: 'i7 7700',
    graphicCard: 'gtx1050',
    producer: 'Samsung',
    price: 20000
});

Samsung.save().then((obj) => {
    console.log('new object added')
}).catch((e) => {
    console.log(e)
})
Apple.save().then((obj) => {
    console.log('new object added')
}).catch((e) => {
    console.log(e)
})
Lg.save().then((obj) => {
    console.log('new object added')
}).catch((e) => {
    console.log(e)
}) */