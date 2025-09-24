import dbQuery from "../db-query.js";
import getTagsToRemove from "./utils/get-tags-to-remove.js";

export default async function updatePost(
    userId,
    postId,
    { title, tags, content }
) {
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
                        userId_name: { userId, name: tag.name },
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
