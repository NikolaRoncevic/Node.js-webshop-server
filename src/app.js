const express = require('express')
const mongoose = require('./db/mongoose.js')
const Phone = require('./db/phoneModel.js')
const Comment = require('./db/commentModel.js')

const bodyParser = require('body-parser')

const app = express()
const port = 3000;

app.use(express.json())
    //app.use(bodyParser.json())

/*
 *sends all phones to server
 */
app.get('/', (req, res) => {
    Phone.find((err, data) => {
        if (err) console.log(err)
        res.send(JSON.stringify(data))
            //idalje nisam siguran kako cu ovo realizovati,treba da posaljem dva niza podataka koji bi se odnosili na najpopularnije proizvode i na snizene,npr,
            //trenutna ideja je poslati sve podatke i onda na frontu raditi filtraciju,ili na frontu napraviti dva get zahteva sa nekom sifrom koji ce se automatski pozivati


    })
})

app.get('/info', (req, res) => {
    res.send('Page that contains all the needed info')
})

/*
    Search is possible based on producer,ramMemory,processor,
    graphic Card,Name and price
*/

app.get('/search', (req, res) => {
    //todo: add search based on price range,price higher than,lower than
    let { producer, ramMemory, processor, graphicCard, name } = req.query;
    let query = {};
    if (name)
        query.name = name.split('%')
    if (producer)
        query.producer = producer.split('%')
    if (ramMemory)
        query.ramMemory = ramMemory.split('%')
    if (processor)
        query.processor = processor.split('%')
    if (graphicCard)
        query.graphicCard = graphicCard.split('%')
    Phone.find(query).then((data) => {

        res.status(200).send(JSON.stringify(data))

    }).catch((e) => {
        res.status(400).send('Bad request')
        console.log(e)
    })
})

//get request for product page,activates when someone clicks on the title of product.
app.get('/product/:id', (req, res) => {
    Phone.findById(query.params.id).then((data) => {

        res.status(200).send(JSON.stringify(data))

    }).catch((e) => {
        res.status(400).send('Bad request')
        console.log(e)
    })


})

app.post('/comment/:id', (req, res) => {
    let productId = req.params.id;
    //razmislicu da li zelim da stavim da ovo bude u url-u ili da se sve salje u body-u!!!!
    //takodje treba uraditi proveru da li postoji proizvod sa ovim Id-jem.

    let text = req.body.text
    console.log(productId);
    console.log(text)

    let comment = new Comment({ productId: productId, text: text });


    comment.save().then((data) => {
        res.status(201).send();
        console.log(data)
    }).catch((err) => {
        res.status(400)
        console.log(err);
    })


})

//zamisao je da ovu funkciju pozove komponenta na product stranici i da onda popuni komentare tekstom iz ovih objekata,koji ce biti povezani sa konkretnim proizvodom
app.get('/comments/:id', (req, res) => {

    Comment.find({ productId: req.params.id }).then((data) => {
        res.send(JSON.stringify(data))
    })

})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})