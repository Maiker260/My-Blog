import express from "express";
import userPostsRouter from "./posts.js";
import userTagsRouter from "./tags.js";

const usersRouter = express.Router();

usersRouter.use("/:userId/posts", userPostsRouter);
usersRouter.use("/:userId/tags", userTagsRouter);

export default usersRouter;
