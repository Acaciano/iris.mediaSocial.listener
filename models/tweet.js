const { Schema, model } = require('mongoose');

const tweetSchema = new Schema({
    username: {
        type: String,
        required: false,
    },
    screenName: {
        type: String,
        required: false,
    },
    profileImageUrl: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    }
}, {
    timestamps: true,
});

module.exports = model('Tweet', tweetSchema);