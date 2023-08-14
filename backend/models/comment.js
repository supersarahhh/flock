const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(

    {
        name: { type: String, required: true },
        comment: { type: String, required: true},
        eventId: { type: String, required: true }
    },

    { timestamps: true }
);


module.exports = mongoose.model('Comments', commentSchema);