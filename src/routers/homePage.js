const express = require('express')
const router = new express.Router()
const Phone = require('./../models/phoneModel.js')

router.get('/', async(req, res) => {
    try {
        //za popularne proizvode
        let popularPromise = Phone.find({}).sort({ NumberOfPreviews: -1 }).limit(9)
            //za snizene proizvode
        let discountPromise = Phone.find({}).sort({ Discount: -1 }).limit(9)

        let popular = await popularPromise
        let discount = await discountPromise

        let results = [popular, discount]
        console.log(results)
        res.send(JSON.stringify(results))
    } catch (e) {
        console.log(e)
    }

})

module.exports = router