const posts = require('express').Router()
const db = require('../models')
const { post } = db
const { Op } = require('sequelize') 

//CREATE NEW POST
posts.post('/', async (req, res) => {
    try {
        const newPost = await post.create(req.body)
        res.status(200).json({
            message: 'New post inserted',
            data: newPost
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//UPDATE POST
posts.put('/:id', async (req, res) => {
    try {
        const updatedPost = await post.update(req.body, {
            where: {
                post_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Updated ${updatedPost}`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE A POST
posts.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await post.destroy({
            where: {
                post_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Deleted ${deletedPost}`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//EXPORT
module.exports = posts