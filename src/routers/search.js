var express = require('express')
var Phone = require('./../models/phoneModel.js').Phone
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
        query.producer = producer.split(delimiterFilters) //filter
    if (ramMemory)
        query.ramMemory = ramMemory.split(delimiterFilters) //filter
    if (processor)
        query.processor = processor.split(delimiterFilters) // filter
    if (graphicCard)
        query.graphicCard = graphicCard.split(delimiterFilters) // filter
    if (search) {
        searchArray = search.toLowerCase().split(delimiterSearchQuery) //array of search parameters
        console.log(searchArray)


    }

    let products
    try {
        console.log('query: ' + query.producer)
        products = await Phone.find(query)
        console.log(typeof query + ' ' + typeof products)
            //console.log('proizvodi po filterima :' + products)
        products = await Phone.find(products)
            /* for (searchParameter of searchArray) {
                
                products = await Phone.aggregate([{
                    $match: products,
                    $match: {
                        $or: [{ name: searchParameter },
                            { processor: searchParameter },
                            { producer: searchParameter },
                            { graphicCard: searchParameter }
                        ]
                    }
                }]).lean()
                console.log('dosao u for ')
            } */

    } catch (e) {
        console.log('greska');
        res.status(500).send(e)
        return
    }

    //console.log(products.length);

    //console.log(products.length)
    res.status(200).send(products)
})

module.exports = router


/*if (searchArray) {
    for (searchParam of searchArray) {
        for (product of products) {

            if (searchParam === product.screenSize.toString().toLowerCase()) {

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

} else {
    console.log('doso da ispisem bez searcha')
    return res.status(200).send(JSON.stringify(products))
}
if (products.length === 0) {
    return res.status(200).send()
}*/