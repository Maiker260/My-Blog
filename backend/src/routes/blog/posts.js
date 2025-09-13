import express from "express";
import authenticateToken from "../../controllers/auth/authenticate-token.js";
import findUser from "../../controllers/db/user/find-user.js";
import createPost from "../../controllers/db/posts/create-post.js";

const postRouter = express.Router();

postRouter.get("/", authenticateToken, async (req, res) => {
    const user = await findUser(req.user.username, { posts: true });
    res.json(user.posts);
});

postRouter.post("/", async (req, res) => {
    const data = req.body;

    try {
        const result = await createPost(data);
        // res.json("Nice");
        res.json(result.success);
    } catch (err) {
        console.log("Found error: " + err);
        throw err;
    }
});

export default postRouter;
