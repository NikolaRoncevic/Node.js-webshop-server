const express = require('express')
const router = new express.Router()
const Phone = require('./../models/phoneModel.js')


router.get('/', async(req, res) => {
    try {
        //za popularne proizvode
        //let popularPromise = Phone.find({}).sort({ NumberOfPreviews: -1 }).limit(9)
        //za snizene proizvode
        //let discountPromise = Phone.find({}).sort({ Discount: -1 }).limit(9)
        let discountPromise = Phone.aggregate([{
            $lookup: {
                from: 'discountedphonemodels',
                localField: 'phoneId',
                foreignField: 'phoneId',
                as: 'discountInfo'
            }
        }, {
            $match: {
                'discountInfo': { $ne: [] }
            }
        }])

        //let popular = await popularPromise
        let discountedPhones = await discountPromise




        let result = {}
            //result.popular = popular;
        result.discountedPhones = discountedPhones;
        console.log(result)
        res.send(JSON.stringify(result))
    } catch (e) {
        console.log(e)
    }

})

module.exports = router