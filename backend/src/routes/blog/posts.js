import express from "express";
import getAllPosts from "../../controllers/db/posts/get-all-posts.js";
import getPost from "../../controllers/db/posts/get-post.js";
import postCommentsRouter from "./comments.js";

const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
    const posts = await getAllPosts();
    res.json(posts);
});

postRouter.get("/:postId", async (req, res) => {
    const { postId } = req.params;

    const post = await getPost(postId);
    res.json(post);
});

postRouter.use("/:postId/comments", postCommentsRouter);

export default postRouter;
