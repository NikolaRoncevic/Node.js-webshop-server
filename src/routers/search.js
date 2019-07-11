var express = require('express')
var Phone = require('./../models/phoneModel.js')
var router = new express.Router()
const delimiterFilters = '%'
const delimiterSearchQuery = ' '


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
        query.producer = producer.split(delimiterFilters)
    if (ramMemory)
        query.ramMemory = ramMemory.split(delimiterFilters)
    if (processor)
        query.processor = processor.split(delimiterFilters)
    if (graphicCard)
        query.graphicCard = graphicCard.split(delimiterFilters)
    if (search) {
        searchArray = search.toLowerCase().split(delimiterSearchQuery)
        console.log(searchArray)


    }
    let filteredBySearch = []
    let products
    try {
        //products = await Phone.find(query)
        products = await Phone.aggregate([
            { $match: query }
        ])

    } catch (e) {
        res.status(500).send()
    }

    console.log(products.length);
    if (searchArray) {
        for (searchParam of searchArray) {
            for (product of products) {

                if (searchParam === product._id) {
                    console.log(searchParam + '   ' + product._id)
                    continue
                }
                if (searchParam === product.producer.toLowerCase()) {

                    continue
                }
                for (let i = 0; i < products.length; i++) {
                    if (products[i] === product) {
                        console.log('izbacio bratica')
                        products.splice(i, 1)
                        i--;
                    }
                }
            }
        }
        /*for (product of products) {
            if (searchArray.includes(product.name.toLowerCase())) {
                filteredBySearch.push(product)
                continue
            }
            //zakomentarisano zato sto nisu potpuni podaci
            if (searchArray.includes(product.screenSize.toString().toLowerCase())) {
                filteredBySearch.push(product)
                continue
            }
            if (searchArray.includes(product.ramMemory.toLowerCase())) {
                filteredBySearch.push(product)
                continue
            }
            if (searchArray.includes(product.producer.toLowerCase())) {
                filteredBySearch.push(product)
                continue
            }
        }*/
    } else {
        console.log('doso da ispisem bez searcha')
        return res.status(200).send(JSON.stringify(products))
    }
    if (products.length === 0) {
        return res.status(200).send()
    }
    console.log(products.length)
    res.status(200).send(products)
})

module.exports = router