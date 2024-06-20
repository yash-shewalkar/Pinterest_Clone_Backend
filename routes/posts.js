const mongoose = require('mongoose');

// Define the Post Schema
const postSchema = new mongoose.Schema({
    postText: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Array,
        default: []
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

// Create the Post Model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
