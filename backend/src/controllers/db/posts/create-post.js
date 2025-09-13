import dbQuery from "../db-query.js";

export default async function createPost({ title, tags, content }) {
    // NEED TO FIX THE DATA SENT TO THE DB
    const args = {
        data: {
            user: { connect: { id: "2fff8fad-0ba8-4731-889f-b3112a6e1f5b" } },
            title,
            content,
            // NEED TO ADD THE TAGS FIRST BEFORE USING THIS CREATEPOST FUNCTION
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
    console.log(title);
    console.log(tags);
    console.log(content);

    if (newPost) return { success: true };
}
