import express from "express";
import authenticateToken from "../../controllers/auth/authenticate-token.js";
import findUser from "../../controllers/db/user/find-user.js";
import getPosts from "../../controllers/db/posts/get-post.js";
import updatePost from "../../controllers/db/posts/update-post.js";
import createPost from "../../controllers/db/posts/create-post.js";

const userPostsRouter = express.Router({ mergeParams: true });

// userPostsRouter.get("/", authenticateToken, async (req, res) => {
userPostsRouter.get("/", async (req, res) => {
    const { userId } = req.params;

    // const user = await findUser(userId, {
    const user = await findUser("ChatGPT", {
        posts: {
            include: {
                comments: true,
            },
        },
    });
    res.json(user.posts);
});

// userPostsRouter.get("/", authenticateToken, async (req, res) => {
userPostsRouter.get("/:postId", async (req, res) => {
    const { userId, postId } = req.params;

    // const post = await getPosts(userId, postId);
    const post = await getPosts(postId);
    res.json(post);
});

userPostsRouter.post("/new", async (req, res) => {
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

userPostsRouter.put("/:postId", async (req, res) => {
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

export default userPostsRouter;
