var express = require('express')
var router = new express.Router()


//get request for product page,activates when someone clicks on the title of product.
router.get('/product/:id', (req, res) => {
    Phone.findById(req.params.id).then((data) => {

        res.status(200).send(JSON.stringify(data))

    }).catch((e) => {
        res.status(400).send('Bad request')
        console.log(e)
    })


})

module.exports = router