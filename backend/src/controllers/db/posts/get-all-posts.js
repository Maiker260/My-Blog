import dbQuery from "../db-query.js";

export default async function getAllPosts() {
    const args = {
        include: {
            user: {
                select: {
                    username: true,
                },
            },
            tags: true,
            comments: true,
        },
    };

    return await dbQuery("post", "findMany", args);
}
