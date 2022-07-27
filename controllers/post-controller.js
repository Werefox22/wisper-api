const Posts = require('express').Router()
const db = require('../models')
const { post, comment } = db

//GET SPECIFIC POST
Posts.get('/:id', async (req, res) => {
    try {
        let includedModels = []
        let ordering = []

        // include comments
        if (req.query.withComments === "true") {
            includedModels.push({
                model: comment
            })

            ordering.push([ comment, 'date', 'desc' ])
        }
        
        // find post
        const foundPost = await post.findOne({
            where: { post_id: req.params.id },
            include: includedModels,
            order: ordering
        })

        // check that a post was found
        if (!foundPost) {
            // Found null
            res.status(404).json({
                message: `404: Could not find post with id of ${req.params.id}.`
            })
        } else {
            // Found post
            res.status(200).json(foundPost)
        }
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
            message: `Successfully updated post ${req.params.id}`,
            updatedPost: updatedPost
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE A POST
Posts.delete('/:id', async (req, res) => {
    try {
        await post.destroy({
            where: {
                post_id: req.params.id
            }
        })
        
        res.status(200).json({
            message: `Deleted post ${req.params.id}`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//EXPORT
module.exports = Posts