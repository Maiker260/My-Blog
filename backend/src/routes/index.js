import express from "express";
import authRouter from "./auth/auth-router.js";
import postRouter from "./blog/posts.js";
import tagsRouter from "./tag/tags.js";
import usersRouter from "./user/users.js";

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/posts", postRouter);
apiRouter.use("/tags", tagsRouter);

export default apiRouter;
