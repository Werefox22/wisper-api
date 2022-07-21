const comments = require('express').Router()
const db = require('../models')
const { comment, post } = db
const { Op } = require('sequelize')

//GET SPECIFIC COMMENT
comments.get('/:id', async (req, res) => {
    try {
        const foundComment = await comment.findOne({
            where: { comment_id: req.params.id }
        })
        res.status(200).json(foundComment.json)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE A COMMENT
comments.post('/', async (req, res) => {
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
comments.put('/:id', async (req, res) => {
    try {
        const updatedComment = await comment.update(req.body, {
            where: {
                comment_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Updated ${updatedComment}`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE A COMMENT
comments.delete('/:id', async (req, res) => {
    try {
        const deletedComment = await comment.destroy({
            where: {
                comment_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Deleted ${deletedComment}`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//EXPORT
module.exports = comments