var Comment = require('./../models/commentModel.js')
var Phone = require('./../models/phoneModel.js')
const express = require('express')
const router = new express.Router();

router.post('/', async(req, res) => {
    //razmislicu da li zelim da stavim da ovo bude u url-u ili da se sve salje u body-u!!!!
    //takodje treba uraditi proveru da li postoji proizvod sa ovim Id-jem.
    let phoneId = req.body.phoneId;
    let text = req.body.text
    let title = req.body.title;

    let comment = { title: title, text: text };
    try {
        await Phone.findOneAndUpdate({ phoneId }, { $push: { comments: comment } })

        res.status(201).send(comment) //da li je potrebno

    } catch (e) {
        res.status(400).send(e);
    }

})

//zamisao je da ovu funkciju pozove komponenta na product stranici i 
//da onda popuni komentare tekstom iz ovih objekata,
//koji ce biti povezani sa konkretnim proizvodom
router.get('/:id', async(req, res) => {
    try {
        //const comment = await Comment.find({ phoneId: req.params.id })
        const phone = await Phone.find({ phoneId: req.params.id })
        const comments = phone[0].comments;
        res.send(comments)
    } catch (e) {
        console.
        res.status(500).send(e)
    }


})

module.exports = router