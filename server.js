const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())

// dotenv
require('dotenv').config()


// cors
app.use(cors())
// var corsOptions = {
// 	origin: [
// 		"localhost",
// 		"deployed frontend"
// 	]
// }

app.get('/', (req, res) => {
	const message = {
		message: "Welcome to the Wisper API. Please view the README at https://github.com/Werefox22/wisper-api to get started."
	}
	res.status(200).json(message)
})

//CONTROLLERS
const postsController = require('./controllers/post-controller')
app.use('/post', postsController)

const commentsController = require('./controllers/comment-controller')
app.use('/comment', commentsController)

const usersController = require('./controllers/user-controller')
app.use('/user', usersController)

app.listen(process.env.PORT, () => {
	console.log("Successfully started on port " + process.env.PORT)
})

//WILDCARD ERROR
app.get('*', (req, res) => {
	res.send('404')
})