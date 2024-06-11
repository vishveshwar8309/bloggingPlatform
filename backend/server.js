import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoDB from './config/db.js';
import Blog from './models/blogsModel.js';
const PORT = 5000;
const app = express();

mongoDB();

app.get("/", async (req, res) => {
    const blogs = await Blog.find({})
    res.send(blogs)
})

app.listen(PORT, () => {
    console.log(`app is listening to port... ${PORT}`)
})