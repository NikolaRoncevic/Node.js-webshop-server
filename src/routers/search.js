var express = require('express')
var Phone = require('./../models/phoneModel.js')
var router = new express.Router();


/*
    Search is possible based on producer,ramMemory,processor,
    graphic Card,Name and price
*/
router.get('/search', (req, res) => {
    //todo: add search based on price range,price higher than,lower than
    let { producer, ramMemory, processor, graphicCard, name } = req.query;
    let query = {};
    if (name)
        query.name = name.split('%')
    if (producer)
        query.producer = producer.split('%')
    if (ramMemory)
        query.ramMemory = ramMemory.split('%')
    if (processor)
        query.processor = processor.split('%')
    if (graphicCard)
        query.graphicCard = graphicCard.split('%')
    Phone.find(query).then((data) => {

        res.status(200).send(JSON.stringify(data))

    }).catch((e) => {
        res.status(400).send('Bad request')
        console.log(e)
    })
})

module.exports = router