const Comments = require('express').Router()
const db = require('../models')
const { comment } = db

//GET SPECIFIC COMMENT
Comments.get('/:id', async (req, res) => {
    try {
        const foundComment = await comment.findOne({
            where: { comment_id: req.params.id }
        })

        // check that a comment was found
        if (!foundComment) {
            // Found null
            res.status(404).json({
                message: `404: Could not find comment with id of ${req.params.id}.`
            })
        } else {
            // Found comment
            res.status(200).json(foundComment)
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE A COMMENT
Comments.post('/', async (req, res) => {
    try {
        const newComment = await comment.create(req.body)
        res.status(200).json({
            message: 'New comment inserted',
            data: newComment
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//EDIT A COMMENT
Comments.put('/:id', async (req, res) => {
    try {
        const updatedComment = await comment.update(req.body, {
            where: {
                comment_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated comment ${req.params.id}`,
            updatedComment: updatedComment
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE A COMMENT
Comments.delete('/:id', async (req, res) => {
    try {
        await comment.destroy({
            where: {
                comment_id: req.params.id
            }
        })
        
        res.status(200).json({
            message: `Deleted comment ${req.params.id}`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//EXPORT
module.exports = Comments