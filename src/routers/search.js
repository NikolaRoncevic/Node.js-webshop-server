var express = require('express')
var Phone = require('./../models/phoneModel.js')
var router = new express.Router();


/*
    Search is possible based on producer,ramMemory,processor,
    graphic Card,Name and price
*/
router.get('/search', async(req, res) => {
    //todo: treba odraditi pretragu baziranu na cenama ali 
    //za to cemo dodati poseban request koji ce primati listu dokumenata
    //i onda je filtrirati po ceni manje vece
    let { producer, ramMemory, processor, graphicCard, search } = req.query;
    let query = {};
    let searchArray
    if (producer)
        query.producer = producer.split('%')
    if (ramMemory)
        query.ramMemory = ramMemory.split('%')
    if (processor)
        query.processor = processor.split('%')
    if (graphicCard)
        query.graphicCard = graphicCard.split('%')
    if (search) {
        searchArray = search.toLowerCase().split('%')

    }
    let filteredBySearch = []
    let products
    try {
        products = await Phone.find(query)

    } catch (e) {
        res.status(500).send()
    }

    if (searchArray) {
        for (product of products) {
            if (searchArray.includes(product.name.toLowerCase())) {
                filteredBySearch.push(product)
                continue
            }
            //zakomentarisano zato sto nisu potpuni podaci
            /* if (searchArray.includes(product.screenSize.toString().toLowerCase())) {
                filteredBySearch.push(product)
                continue
            }
            if (searchArray.includes(product.ramMemory.toLowerCase())) {
                filteredBySearch.push(product)
                continue
            }*/
            if (searchArray.includes(product.producer.toLowerCase())) {
                filteredBySearch.push(product)
                continue
            }
        }
    } else {
        console.log('doso da ispisem bez searcha')
        return res.status(200).send(JSON.stringify(products))
    }
    if (filteredBySearch.length === 0) {
        return res.status(200).send()
    }
    res.status(200).send(filteredBySearch)
})

module.exports = router