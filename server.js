const express = require('express')
const app = express()

// sequelize
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize({
	storage: process.env.PG_URI,
	dialect: 'postgres'
})

try {
	sequelize.authenticate()
	console.log(`Connected with Sequelize at ${process.env.PG_URI}`)
} catch (err) {
	console.log(`Unable to connect to PG: ${err}`)
}

app.use(express.json())

// dotenv
require('dotenv').config()

app.get('/', (req, res) => {
	res.send("Hello world!")
})

app.listen(process.env.PORT)