const express = require('express')
const mongoose = require('./db/mongoose.js')
const Phone = require('./models/phoneModel.js')
const Comment = require('./models/commentModel.js')
const commentsRouter = require('./routers/comments.js')
const searchRouter = require('./routers/search.js')
const productsRouter = require('./routers/products.js')
const shoppingCartRouter = require('./routers/shoppingCart.js')
const infoRouter = require('./routers/info.js')

const bodyParser = require('body-parser')

const app = express()
const port = 3000;

/*
    Pitanja:
        1. Kako podesiti zahteva da bude dostupan samo frontendu odnosno da moze samo automatski da se izvrsi neki get zahtev bez mogucnosti izvrsenja istog kroz browser.
        2. Da li za pocetnu stranu za najpregledanije i istaknute praviti dva odvojena get zahteva ili nekako napraviti u jednom zahtevu da vrati niz od dva niza dokumenata
        3. Da li za korpu,posto ne radimo pracenje sesije,napraviti novu kolekciju dokumenata u koju ce se automatski ubacivati dokument sa eventualno jos kolicinom,i onda odlaskom
        na korpu vrsiti get zahtev na tu kolekicju i samo puniti komponente tim podacima.
        4. Da li evidentirati pregledanost proizvoda tako sto ce se klikom na link proizvoda raditi update proizvoda i inkrementirati polje broj pregleda za 1?
*/

app.use(express.json())
app.use(commentsRouter)
app.use(searchRouter)
app.use(productsRouter)
app.use(shoppingCartRouter)
app.use(infoRouter)
    //app.use(bodyParser.json())


app.get('/', (req, res) => {
    Phone.find((err, data) => {
        if (err) console.log(err)
        res.send(JSON.stringify(data))
            //idalje nisam siguran kako cu ovo realizovati,treba da posaljem dva niza podataka koji bi se odnosili na najpopularnije proizvode i na snizene,npr,
            //trenutna ideja je poslati sve podatke i onda na frontu raditi filtraciju,ili na frontu napraviti dva get zahteva sa nekom sifrom koji ce se automatski pozivati


    })
})
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})