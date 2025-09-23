import express from "express";
import addComment from "../../controllers/db/posts/add-comment.js";
import deleteComment from "../../controllers/db/comments/delete-comment.js";
import authenticateToken from "../../controllers/auth/authenticate-token.js";

const postCommentsRouter = express.Router({ mergeParams: true });

postCommentsRouter.post("/", async (req, res) => {
    const { postId } = req.params;
    const data = req.body;

    try {
        const result = await addComment(postId, data);
        res.json(result.success);
    } catch (err) {
        console.log("Found error: " + err);
        throw err;
    }
});

postCommentsRouter.delete(
    "/:commentId",
    authenticateToken,
    async (req, res) => {
        const { postId, commentId } = req.params;

        try {
            const result = await deleteComment(res, postId, commentId);
            res.json(result.success);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal server error" });
        }
    }
);

export default postCommentsRouter;
