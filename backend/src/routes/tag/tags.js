import express from "express";
import getUserTags from "../../controllers/db/user/get-user-tags.js";

const tagsRouter = express.Router();

// tagsRouter.get("/tags/:userId", async (req, res) => {
tagsRouter.get("/", async (req, res) => {
    // const { userId } = req.params;
    const id = "2fff8fad-0ba8-4731-889f-b3112a6e1f5b";

    const tags = await getUserTags(id);
    res.json(tags);
});

export default tagsRouter;
