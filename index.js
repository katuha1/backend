const express = require('express')
const app = express()

const productRouter = express.Router()

productRouter.use('/create', function (request, response) {
  response.send('Избранное')
})
productRouter.use('/:id', function (request, response) {
  response.send(`Товар ${request.params.id}`)
})
productRouter.use('/', function (request, response) {
  response.send('Каталог')
})
productRouter.use('/reg', function (request, response) {
  response.send('Регистрация')
})

app.use('/products', productRouter)

app.use('/about', function (request, response) {
  response.send('Корзина')
})

app.use('/kab', function (request, response) {
  response.send('Личный кабинет')
})

app.use('/', function (request, response) {
  response.send('Главная страница')
})
app.listen(7000)