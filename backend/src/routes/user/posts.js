import express from "express";
import authenticateToken from "../../controllers/auth/authenticate-token.js";
import findUserById from "../../controllers/db/user/find-user-by-Id.js";
import getPosts from "../../controllers/db/posts/get-post.js";
import updatePost from "../../controllers/db/posts/update-post.js";
import createPost from "../../controllers/db/posts/create-post.js";
import deletePost from "../../controllers/db/posts/delete-post.js";

const userPostsRouter = express.Router({ mergeParams: true });

userPostsRouter.get("/", authenticateToken, async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await findUserById(userId, {
            posts: {
                include: {
                    comments: true,
                },
            },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.json(user.posts || []);
    } catch (err) {
        console.error("Error fetching user posts:", err);
        return res.status(500).json({ error: "Failed to fetch user posts" });
    }
});

userPostsRouter.get("/:postId", authenticateToken, async (req, res) => {
    const { postId } = req.params;

    const post = await getPosts(postId);
    res.json(post);
});

userPostsRouter.post("/new", authenticateToken, async (req, res) => {
    const userId = req.user.id;
    const data = req.body;

    try {
        const result = await createPost(userId, data);
        res.json(result.success);
    } catch (err) {
        console.log("Found error: " + err);
        throw err;
    }
});

userPostsRouter.put("/:postId", authenticateToken, async (req, res) => {
    const data = req.body;
    const userId = req.user.id;
    const { postId } = req.params;

    try {
        const result = await updatePost(userId, postId, data);
        res.json(result.success);
    } catch (err) {
        console.log("Found error: " + err);
        throw err;
    }
});

userPostsRouter.delete("/:postId", authenticateToken, async (req, res) => {
    const { postId } = req.params;

    try {
        const result = await deletePost(postId);
        res.json(result.success);
    } catch (err) {
        console.log("Found error: " + err);
        throw err;
    }
});

export default userPostsRouter;
