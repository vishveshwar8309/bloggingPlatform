import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoDB from './config/db.js';
import Blog from './models/blogsModel.js';
import blogRoutes from './routes/blogRoutes.js';
import userRoutes from "./routes/userRoutes.js"
const PORT = process.env.PORT || 5000;
const app = express();

mongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/blogs', blogRoutes)
app.use('/user', userRoutes);

app.get("/", async (req, res) => {
    const blogs = await Blog.find({})
    res.send(blogs)
})

app.listen(PORT, () => {
    console.log(`app is listening to port... ${PORT}`)
})