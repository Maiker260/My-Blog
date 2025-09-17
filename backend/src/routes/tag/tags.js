import express from "express";
import getAllTags from "../../controllers/db/tags/get-all-tags.js";

const tagsRouter = express.Router();

tagsRouter.get("/", async (req, res) => {
    const tags = await getAllTags();
    res.json(tags);
});

export default tagsRouter;
