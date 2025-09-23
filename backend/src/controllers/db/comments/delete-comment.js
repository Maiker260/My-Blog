import dbQuery from "../db-query.js";

export default async function deleteComment(res, postId, commentId) {
    const comment = await dbQuery("comment", "findFirst", {
        where: { id: commentId },
    });

    if (!comment || comment.postId !== postId) {
        return res
            .status(404)
            .json({ message: "Comment not found for this post" });
    }

    const result = await dbQuery("comment", "delete", {
        where: { id: commentId },
    });

    if (result) return { success: true };
}
