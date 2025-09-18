import dbQuery from "../db-query.js";
import getTagsToRemove from "./utils/get-tags-to-remove.js";

// export default async function updatePost(userId, postId, { title, tags, content }) {
export default async function updatePost(postId, { title, tags, content }) {
    const userId = "370dd59d-ede5-4ce8-ab9c-c33076d55ca7";
    const args = {
        where: {
            id: postId,
        },
        data: {
            user: { connect: { id: userId } },
            title,
            content,
            tags: {
                connect: tags.map((tag) => ({
                    userId_name: { userId, name: tag },
                })),

                disconnect: (await getTagsToRemove(postId, tags)).map(
                    (tag) => ({
                        userId_name: { userId, name: tag },
                    })
                ),
            },
        },
        include: {
            tags: true,
        },
    };

    const postUpdated = await dbQuery("post", "update", args);

    if (postUpdated) return { success: true };
}
