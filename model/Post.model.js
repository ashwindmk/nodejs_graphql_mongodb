const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const Post = mongoose.model('post', PostSchema, 'posts');

module.exports = Post;
