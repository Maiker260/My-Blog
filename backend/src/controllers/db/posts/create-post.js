import dbQuery from "../db-query.js";

export default async function createPost({ title, tags, content }) {
    const userId = "370dd59d-ede5-4ce8-ab9c-c33076d55ca7";
    const args = {
        data: {
            // CHANGE AND REQUEST THE USER ID
            user: { connect: { id: userId } },
            title,
            content,
            tags: {
                // NEED TO FIX THIS
                connect: tags.map((tag) => ({
                    userId,
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
