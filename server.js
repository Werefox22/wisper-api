const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	res.send("Hello world!")
})

app.listen(3000)