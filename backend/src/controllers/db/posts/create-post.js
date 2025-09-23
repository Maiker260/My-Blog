import dbQuery from "../db-query.js";

export default async function createPost(userId, { title, tags, content }) {
    const args = {
        data: {
            user: { connect: { id: userId } },
            title,
            content,
            tags: {
                connect: tags.map((tag) => ({
                    userId_name: {
                        userId,
                        name: tag,
                    },
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
