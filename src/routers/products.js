var express = require('express')
var router = new express.Router()
var Phone = require('./../models/phoneModel.js')


//get request for product page,activates when someone clicks on the title of product.
router.get('/:id', async(req, res) => {
    console.log('dosao')
    try {
        let phone = await Phone.findById(req.params.id)
        if (!phone) {
            res.status(400).send();
        }
        res.status(200).send(JSON.stringify(phone))
    } catch (e) {
        res.status(500).send();
    }


})

router.put('/:id', async(req, res) => {
    try {
        let phone = await Phone.findByIdAndUpdate({ id: req.params.id }, { $inc: { NumberOfPreviews: 1 } }, { new: true })
        if (!phone) {
            res.status(400).send()
        }
        res.status(200).send(phone)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router