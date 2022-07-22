const users = require('express').Router()
const db = require('../models')
const { user, post, comment } = db
const { Op } = require('sequelize')

//GET SPECIFIC USER
users.get('/:id', async (req, res) => {
    try {
        let includedModels = []
        // include posts
        if (req.query.withPosts === "true") {
            includedModels.push({
                model: post
            })
        }

        // include follows
        if (req.query.withFollows === "true") {
            includedModels.push({
                model: user,
                as: "follows",
                through: {
                    attributes: []
                }
            })
        }

        // include comments
        if (req.query.withComments === "true") {
            includedModels.push({
                model: comment
            })
        }

        // find user
        const foundUser = await user.findOne({
            where: { user_id: req.params.id },
            include: includedModels
        })

        res.status(200).json(foundUser)
    } catch (error) {
        console.log(error)
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