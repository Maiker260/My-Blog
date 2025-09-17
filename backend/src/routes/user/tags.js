import express from "express";
import updateUserTags from "../../controllers/db/user/tags/update-user-tags.js";
import getUserTags from "../../controllers/db/user/tags/get-user-tags.js";

const userTagsRouter = express.Router({ mergeParams: true });

userTagsRouter.get("/", async (req, res) => {
    // const { userId } = req.params;
    const userId = "370dd59d-ede5-4ce8-ab9c-c33076d55ca7";

    try {
        const tags = await getUserTags(userId);
        res.json(tags);
    } catch (err) {
        console.error("Error fetching tags:", err);
        res.status(500).json({ error: "Failed to fetch user tags" });
    }
});

userTagsRouter.put("/", async (req, res) => {
    // const { userId } = req.params;
    const tags = req.body;
    const userId = "370dd59d-ede5-4ce8-ab9c-c33076d55ca7";

    try {
        const newTags = await updateUserTags(userId, tags);
        res.json(newTags.success);
    } catch (err) {
        console.error("Error storing tags:", err);
        res.status(500).json({ error: "Failed to store tags" });
    }
});

export default userTagsRouter;
