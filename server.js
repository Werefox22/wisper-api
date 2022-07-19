const express = require('express')
const app = express()

app.use(express.json())

// dotenv
require('dotenv').config()

app.get('/', (req, res) => {
	res.send("Hello world!")
})

app.listen(process.env.PORT)