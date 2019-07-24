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
    let producerMatch = [{}]
    let ramMemoryMatch = [{}]
    let processorMatch = [{}]
    let graphicCardMatch = [{}]
    let nameMatch = [{}]
    if (producer)
        producerMatch = producer.split(delimiterFilters).map(filter => ({ producer: filter }));
    if (ramMemory)
        ramMemoryMatch = ramMemory.split(delimiterFilters).map(filter => ({ ramMemory: filter }));
    if (processor)
        processorMatch = processor.split(delimiterFilters).map(filter => ({ processor: filter }));
    if (graphicCard)
        graphicCardMatch = graphicCard.split(delimiterFilters).map(filter => ({ graphicCard: filter }));
    if (search) {
        searchArray = search.toLowerCase().split(delimiterSearchQuery) //array of search parameters
            //const nameMatch = searchArray.map(word => ({ name: { $regex: `/${word}/`, $options: `i` } }));
        nameMatch = searchArray.map(word => ({ name: new RegExp(word, 'i') }));
    }
    let products
    try {
        products = await Phone.aggregate([{
            $match: {
                $and: [
                    { $and: nameMatch },
                    { $or: producerMatch },
                    { $or: ramMemoryMatch },
                    { $or: processorMatch },
                    { $or: graphicCardMatch }
                ]
            }
        }])


    } catch (e) {
        console.log('greska');
        res.status(500).send(e)
        return
    }
    res.status(200).send(products)
})

module.exports = router