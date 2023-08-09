const express = require('express')
const router = express.Router()
const db = require('../models')


router.get('/:eventId', function (req, res) {
    db.Comment.find({ eventId: req.params.eventId})
        .then(comments => res.json(comments))

})

router.post('/', (req, res) => {
    console.log(req.body)
    db.Comment.create(req.body)
        .then(comment => res.json(comment))
})

router.put('/:id', (req, res) => {
    db.Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(comment => res.json(comment))
})

router.delete('/:id', (req, res) => {
    db.Comment.findByIdAndRemove(req.params.id)
        .then(() => res.json({ deletedCommentId: req.params.id }))
})



module.exports = router