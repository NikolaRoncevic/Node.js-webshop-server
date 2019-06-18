const express = require('express')
const Phone = require('./db/phoneModel.js');
const mongoose = require('./db/mongoose.js');

const app = express()
const port = 3000;

app.use(express.json())

/*
 *sends all phones to server
 */
app.get('/', (req, res) => {
    Phone.find((err, data) => {
        if (err) console.log(err)
        res.send(JSON.stringify(data))
        console.log('sent data to server')
    })
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})