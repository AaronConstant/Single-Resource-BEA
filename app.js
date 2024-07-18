const cors = require('cors')
const express = require('express')
const app = express()

// controllers
const herbController = require('./controllers/herbController.js')

app.use(cors())
app.use(express.json())

// routes
app.get('/', (req, res)=> {
    res.send("Welcome to Herbs!")
})

app.use('/herbs', herbController)

module.exports = app