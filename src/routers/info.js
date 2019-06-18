const express = require('express')
const router = new express.Router()

router.get('/info', (req, res) => {
    res.send('Page that contains all the needed info')
})

module.exports = router