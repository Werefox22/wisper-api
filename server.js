const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())

// dotenv
require('dotenv').config()


// cors
var corsOptions = {
	origin: [
		"localhost",
		"deployed frontend"
	]
}

app.get('/', cors(corsOptions), (req, res) => {
	res.send("Hello world!")
})

//CONTROLLERS
const postsController = require('./controllers/post-controller')
app.use('/post', postsController)

const commentsController = require('./controllers/comment-controller')
app.use('/post/:id/comment', commentsController)

const usersController = require('./controllers/user-controller')
app.use('/user', usersController)

app.listen(process.env.PORT, () => {
	console.log("Successfully started on port " + process.env.PORT)
})

//WILDCARD ERROR
app.get('*', (req, res) => {
	res.send('404')
})