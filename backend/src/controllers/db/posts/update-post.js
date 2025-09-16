import dbQuery from "../db-query.js";
import getTagsToRemove from "./utils/get-tags-to-remove.js";

// export default async function updatePost(userId, postId, { title, tags, content }) {
export default async function updatePost(postId, { title, tags, content }) {
    const args = {
        where: {
            id: postId,
        },
        data: {
            // user: { connect: { id: userId } },
            user: { connect: { id: "2fff8fad-0ba8-4731-889f-b3112a6e1f5b" } },
            title,
            content,
            tags: {
                connect: tags.map((tag) => ({ name: tag })),

                disconnect: await getTagsToRemove(postId, tags),
            },
        },
        include: {
            tags: true,
        },
    };

    const postUpdated = await dbQuery("post", "update", args);

    if (postUpdated) return { success: true };
}
