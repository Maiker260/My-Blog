import dbQuery from "../db-query.js";

export default async function addComment(postId, { username, content }) {
    const args = {
        data: {
            postId,
            username,
            content,
        },
    };

    const newComment = await dbQuery("comment", "create", args);

    if (newComment) return { success: true };
}
