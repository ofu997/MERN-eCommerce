const express = require('express');
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log('Server running onport 5000'))

// To extract the JSON body content from the response, 
// we use the json() method (defined on the Body mixin, which is 
// implemented by both the Request and Response objects.)