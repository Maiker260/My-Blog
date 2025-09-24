import dbQuery from "../../db-query.js";

export default async function getTagsToRemove(postId, newTags) {
    const post = await dbQuery("post", "findUnique", {
        where: { id: postId },
        include: { tags: true },
    });

    return post.tags
        .filter((tag) => !newTags.includes(tag.name))
        .map((tag) => ({ id: tag.id, name: tag.name }));
}
