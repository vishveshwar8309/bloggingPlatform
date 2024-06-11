import mongoose from 'mongoose';
import User from './userModel.js';

const blogsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.String,
        required: true,
        ref: 'user',
    },
    date: {
        type: Date,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: [
        { type: String },
    ],
    views: {
        type: Number,
        required: true,
    },
})

const Blog = new mongoose.model("Blog", blogsSchema)

export default Blog;