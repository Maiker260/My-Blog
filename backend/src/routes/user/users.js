import express from "express";
import authenticateToken from "../../controllers/auth/authenticate-token.js";
import findUser from "../../controllers/db/user/find-user.js";
import getPosts from "../../controllers/db/posts/get-post.js";
import updatePost from "../../controllers/db/posts/update-post.js";
import createPost from "../../controllers/db/posts/create-post.js";

const usersRouter = express.Router();

// usersRouter.get("/", authenticateToken, async (req, res) => {
usersRouter.get("/:userId/posts", async (req, res) => {
    // const { userId } = req.params;

    // const user = await findUser(userId, {
    const user = await findUser("Yo", {
        posts: {
            include: {
                comments: true,
            },
        },
    });
    res.json(user.posts);
});

// usersRouter.get("/", authenticateToken, async (req, res) => {
usersRouter.get("/:userId/post/:postId", async (req, res) => {
    const { userId, postId } = req.params;

    // const post = await getPosts(userId, postId);
    const post = await getPosts(postId);
    res.json(post);
});

usersRouter.post("/:userId/post", async (req, res) => {
    const { userId } = req.params;
    const data = req.body;

    try {
        // const result = await createPost(userId, data);
        const result = await createPost(data);
        res.json(result.success);
    } catch (err) {
        console.log("Found error: " + err);
        throw err;
    }
});

usersRouter.put("/:userId/post/:postId", async (req, res) => {
    // const user = await findUser(req.user.username });

    const data = req.body;
    const { userId, postId } = req.params;

    try {
        // const result = await updatePost(userId, postId, data);
        const result = await updatePost(postId, data);
        res.json(result.success);
    } catch (err) {
        console.log("Found error: " + err);
        throw err;
    }
});

export default usersRouter;
