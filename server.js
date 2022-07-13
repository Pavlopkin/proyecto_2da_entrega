const express = require('express')
const FactoryDAO = require('./daos/index')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
////////////////////////////////////
const DAO = FactoryDAO('memory')////
////////////////////////////////////
//PRODUCTOS//
app.post('/products', (req, res)=> res.send(DAO.product.save(req.body))) //ingresa un nuevo producto
app.get('/products/:id', (req, res)=> res.send(DAO.product.getById(req.params.id))) //muestra un solo producto
app.get('/products', (req, res)=> res.send(DAO.product.getAll())) //muestra todos los productos
app.delete('/products/:id', (req, res)=> res.send(DAO.product.deleteById(req.params.id))) //borra el producto individualizado
app.put('/products/:id', (req, res)=> res.send(DAO.product.changeById(req.params.id, req.body))) //modifica el producto individualizado
app.delete('/products', (req, res)=> res.send(DAO.product.deleteAll())) //borra todos los productos
//CART//
app.post('/cart', (req, res)=> res.send(DAO.cart.save(req.body))) //ingresa un nuevo producto
app.get('/cart/:id', (req, res)=> res.send(DAO.cart.getById(req.params.id))) //muestra un solo producto
app.get('/cart', (req, res)=> res.send(DAO.cart.getAll())) //muestra todos los productos
app.delete('/cart/:id', (req, res)=> res.send(DAO.cart.deleteById(req.params.id))) //borra el producto individualizado
app.put('/cart/:id', (req, res)=> res.send(DAO.cart.changeById(req.params.id, req.body))) //modifica el producto individualizado
app.delete('/cart', (req, res)=> res.send(DAO.cart.deleteAll())) //borra todos los productos

app.listen(8080);