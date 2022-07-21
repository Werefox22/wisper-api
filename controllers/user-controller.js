const users = require('express').Router()
const db = require('../models')
const { user } = db
const { Op } = require('sequelize')
const comments = require('./comment-controller')

//GET SPECIFIC USER
users.get('/:id', async (req, res) => {
    try {
        const foundUser = {}
        if (req.query.withPosts === "true") {
            console.log("With posts!")
            foundUser = await user.findOne({
                where: { user_id: req.params.id },
                include: posts
            })
        } else {
            foundUser = await user.findOne({
                where: { user_id: req.params.id }
            })
        }

        res.status(200).json(foundUser.json())
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET SPECIFIC USER
users.get('/:id', async (req, res) => {
    try {
        const foundUser = user.findOne({
            where: { 
                user_id: req.params.id
            }
        }) 
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//UPDATE USER
users.put('/:id', async (req, res) => {
    try {
        const updatedUser = await user.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE USER
users.delete('./:id', async (req, res) => {
    try {
        const deletedUser = await user.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Deleted ${deletedUser}`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})
//EXPORT
module.exports = users