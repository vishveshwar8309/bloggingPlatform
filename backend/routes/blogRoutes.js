import express from 'express';
const router = express.Router();
import { getAllBlogs, getBlogData } from '../controllers/blogsController.js';

router.route("/").get(getAllBlogs);
router.route("/:id").get(getBlogData);

export default router;