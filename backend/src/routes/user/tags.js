import express from "express";
import updateUserTags from "../../controllers/db/user/tags/update-user-tags.js";
import getUserTags from "../../controllers/db/user/tags/get-user-tags.js";
import authenticateToken from "../../controllers/auth/authenticate-token.js";

const userTagsRouter = express.Router({ mergeParams: true });

userTagsRouter.get("/", authenticateToken, async (req, res) => {
    const userId = req.user.id;

    try {
        const tags = await getUserTags(userId);
        res.json(tags);
    } catch (err) {
        console.error("Error fetching tags:", err);
        res.status(500).json({ error: "Failed to fetch user tags" });
    }
});

userTagsRouter.put("/", authenticateToken, async (req, res) => {
    const userId = req.user.id;
    const tags = req.body;

    try {
        const newTags = await updateUserTags(userId, tags);
        res.json(newTags.success);
    } catch (err) {
        console.error("Error storing tags:", err);
        res.status(500).json({ error: "Failed to store tags" });
    }
});

export default userTagsRouter;
