import Blog from "../models/blogsModel.js";


const getAllBlogs = async (req, res) => {

    try {
        const blogs = await Blog.find({});
        res.status(200).json(blogs);
    } catch (error) {
        res.status(404);
        throw new Error("Resource not found");
    }

}

const getBlogData = async (req, res) => {
    const blogId = req.params.id;

    try {
        const blogData = await Blog.findById(blogId);

        res.status(200).json(blogData);
    } catch (err) {
        res.status(404);
        throw new Error("Resource not Found");
    }
}

export { getAllBlogs, getBlogData };