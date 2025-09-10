import express from "express";
import authenticateToken from "../../controllers/auth/authenticate-token.js";
import findUser from "../../controllers/db/user/find-user.js";

const postRouter = express.Router();

postRouter.get("/", authenticateToken, async (req, res) => {
    const user = await findUser(req.user.username, { posts: true });
    res.json(user.posts);
});

postRouter.post("/", (req, res) => {
    const data = req.body;

    console.log(data);
    res.json("Nice");
});

export default postRouter;
