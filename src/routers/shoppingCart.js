var express = require('express')
var router = new express.Router()

router.get('/cart', (req, res) => {
    //todo : napraviti default stranicu za korpu
})

router.delete('/cart/:id', (req, res) => {
    //todo: brisanje iz liste ili baze ili cega vec :V
})

module.exports = router