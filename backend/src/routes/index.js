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

// PROTECTED ROUTES:

// POST /posts Create a new post

// PUT/PATCH /posts/:id  Edit a post (only if the user owns it)

// DELETE /posts/:id Delete a post (only if the user owns it)

// POST /comments Add a comment (optional: require login)

// DELETE /comments/:id Delete a comment (user/admin only)

// PUT/PATCH /users/:id Update user profile (only self)

// DELETE /users/:id  Delete user account (only self/admin)
