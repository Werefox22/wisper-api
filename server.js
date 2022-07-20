const express = require('express')
const app = express()

// sequelize
const { Sequelize } = require('sequelize')

app.use(express.json())

// dotenv
require('dotenv').config()

//ROOT
app.get('/', (req, res) => {
	res.send("Hello world!")
})

app.listen(process.env.PORT)