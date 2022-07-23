const Users = require('express').Router()
const db = require('../models')
const { user, post, comment } = db

//GET SPECIFIC USER
Users.get('/:id', async (req, res) => {
    try {
        let includedModels = []
        let ordering = []
        
        // include posts
        if (req.query.withPosts === "true") {
            includedModels.push({
                model: post
            })

            ordering.push([ post, 'date', 'desc' ])
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

            ordering.push([ {model: user, as:"follows"}, 'name', 'asc' ])
        }

        // include comments
        if (req.query.withComments === "true") {
            includedModels.push({
                model: comment
            })

            ordering.push([ comment, 'date', 'desc' ])
        }

        // find user
        const foundUser = await user.findOne({
            where: { user_id: req.params.id },
            include: includedModels,
            order: ordering
        })

        res.status(200).json(foundUser)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

//UPDATE USER
Users.put('/:id', async (req, res) => {
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
Users.delete('./:id', async (req, res) => {
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
module.exports = Users