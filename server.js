const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const CompanyRouter = require('./routes/company')
const AuthRouter = require('./routes/auth')
const OrderRouter = require('./routes/order')

mongoose.connect('mongodb+srv://quickchat:aloshe752@cluster0.tthwtvt.mongodb.net/quickchat', {
})
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error);
})
database.once('open', () => {
  console.log('database connected')
})

const app = express()
// app uses settings
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

// port

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`localhost work with port: ${PORT}`)
})

// Apply api's

app.use('/api/company', CompanyRouter)
app.use('/api/user', AuthRouter)
app.use('/api/order')