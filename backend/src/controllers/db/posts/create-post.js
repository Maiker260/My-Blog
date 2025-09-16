import dbQuery from "../db-query.js";

export default async function createPost({ title, tags, content }) {
    const args = {
        data: {
            // CHANGE AND REQUEST THE USER ID
            user: { connect: { id: "2fff8fad-0ba8-4731-889f-b3112a6e1f5b" } },
            title,
            content,
            tags: {
                connect: tags.map((tag) => ({
                    name: tag,
                })),
            },
        },
        include: {
            tags: true,
        },
    };

    const newPost = await dbQuery("post", "create", args);

    if (newPost) return { success: true };
}
