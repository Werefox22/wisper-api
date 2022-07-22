const Posts = require('express').Router()
const db = require('../models')
const { post, comment } = db

//GET SPECIFIC POST
Posts.get('/:id', async (req, res) => {
    try {
        let includedModels = []
        // include comments
        if (req.query.withComments === "true") {
            includedModels.push({
                model: comment
            })
        }
        
        // find post
        const foundPost = await post.findOne({
            where: { post_id: req.params.id },
            include: includedModels
        })
        res.status(200).json(foundPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE NEW POST
Posts.post('/', async (req, res) => {
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
Posts.put('/:id', async (req, res) => {
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
Posts.delete('/:id', async (req, res) => {
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
module.exports = Posts