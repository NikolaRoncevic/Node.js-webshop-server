const express = require('express')
const Phone = require('./db/phoneModel.js');
const mongoose = require('./db/mongoose.js');

const Samsung = new Phone({
    name: 'Galaxy A',
    screenSize: 15.6,
    processor: 'i7 7700',
    graphicCard: 'gtx1050',
    producer: 'Samsung',
    price: 20000
});

Samsung.save().then((obj) => {
    console.log(obj)
}).catch((e) => {
    console.log(e)
})