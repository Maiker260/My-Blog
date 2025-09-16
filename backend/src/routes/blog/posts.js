import express from "express";
import getAllPosts from "../../controllers/db/posts/get-all-posts.js";
import getPost from "../../controllers/db/posts/get-post.js";

const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
    const posts = await getAllPosts();
    res.json(posts);
});

postRouter.get("/:id", async (req, res) => {
    const { id } = req.params;

    const post = await getPost(id);
    res.json(post);
});

export default postRouter;
