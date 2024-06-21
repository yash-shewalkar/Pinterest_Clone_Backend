const mongoose = require('mongoose');

// Define the Post Schema
const postSchema = new mongoose.Schema({
    imageText: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        default: "new Post"
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
