var Comment = require('./../models/commentModel.js')
const express = require('express')
const router = new express.Router();

router.post('/', async(req, res) => {
    //razmislicu da li zelim da stavim da ovo bude u url-u ili da se sve salje u body-u!!!!
    //takodje treba uraditi proveru da li postoji proizvod sa ovim Id-jem.
    let productId = req.body.productId;
    let text = req.body.text
    console.log('dosao')
    let comment = new Comment({ productId: productId, text: text });
    try {
        await comment.save();
        console.log(comment)
        res.status(201).send(comment) //da li je potrebno

    } catch (e) {
        res.status(400).send(e);
    }

})

//zamisao je da ovu funkciju pozove komponenta na product stranici i da onda popuni komentare tekstom iz ovih objekata,koji ce biti povezani sa konkretnim proizvodom
router.get('/:id', async(req, res) => {
    try {
        const comment = await Comment.find({ productId: req.params.id })
        res.send(comment)
    } catch (e) {
        res.status(500).send()
    }


})

module.exports = router