import express from 'express'; 
//const express = require("express") versiónnueva "type": "module" en package.json
import randomBytes from 'crypto';
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

const products = {}

app.get('/products', (req, res) => {
    res.send(products)
});

app.post('/products', (req, res) => {
    const id = randomBytes(4).toString('hex');

    const {name} = reg.body
    products[id] = {
        id,
        name
    }
    res.status.send(products[id])
});

app.listen(3000, () => {
    console.log("Listening on port 3000")
})