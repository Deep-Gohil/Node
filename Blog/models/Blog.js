
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    userId: String
})

const Blog = mongoose.model('Task', blogSchema)

module.exports = Blog