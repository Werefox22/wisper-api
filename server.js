const express = require('express')
const app = express()

app.use(express.json())

// dotenv
require('dotenv').config()

// // Sequelize
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize({    
// 	"username": process.env.DATABASE_USER,
// 	"password": process.env.DATABASE_PASS,
// 	"database": process.env.DATABASE_DATA,
// 	"host": process.env.DATABASE_HOST,
// 	"dialect":"postgres",
// 	"protocol":"postgres",
// 	"port": process.env.DATABASE_PORT, 
// 	"dialectOptions": {
// 		"ssl": {
// 			"require": true,
// 			"rejectUnauthorized": false
// 		}
// 	}
// });

// sequelize
// 	.authenticate()
// 	.then(() => {
// 		console.log('Connection has been established successfully.');
// 	})
// 	.catch(err => {
// 		console.error('Unable to connect to the database:', err);
// 	});

// const db = require('./models')
// db.sequelize.sync({ force: true })

// routes
app.get('/', (req, res) => {
	res.send("Hello world!")
})

//WILDCARD ERROR
app.get('*', (req, res) => {
	res.send('404')
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