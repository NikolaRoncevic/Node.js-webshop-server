const express = require('express')
const mongoose = require('./db/mongoose')
const commentsRouter = require('./routers/comments.js')
const searchRouter = require('./routers/search.js')
const productsRouter = require('./routers/products.js')
const shoppingCartRouter = require('./routers/shoppingCart.js')
const infoRouter = require('./routers/info.js')
const homePageRouter = require('./routers/homePage.js')
const path = require('path')

const bodyParser = require('body-parser')

const app = express();
const port = 3000;

/*
    Pitanja:
        1. Kako podesiti zahteva da bude dostupan samo frontendu odnosno da moze samo automatski da se izvrsi neki get zahtev bez mogucnosti izvrsenja istog kroz browser.
        3. Da li za korpu,posto ne radimo pracenje sesije,napraviti novu kolekciju dokumenata u koju ce se automatski ubacivati dokument sa eventualno jos kolicinom,i onda odlaskom
        na korpu vrsiti get zahtev na tu kolekicju i samo puniti komponente tim podacima.
        4. Da li evidentirati pregledanost proizvoda tako sto ce se klikom na link proizvoda raditi update proizvoda i inkrementirati polje broj pregleda za 1?
*/
var cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));


app.use('/comments', commentsRouter)
app.use(searchRouter)
app.use('/product', productsRouter)
app.use('/cart', shoppingCartRouter)
app.use(infoRouter)
app.use(homePageRouter)

//app.use(bodyParser.json())




console.clear()
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})