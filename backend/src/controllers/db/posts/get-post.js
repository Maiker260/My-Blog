import dbQuery from "../db-query.js";

export default async function getPost(id) {
    const args = {
        where: {
            id,
        },
        include: {
            user: {
                select: {
                    username: true,
                },
            },
            comments: {
                select: {
                    id: true,
                    username: true,
                    content: true,
                    createdAt: true,
                },
            },
            tags: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    };

    return await dbQuery("post", "findUnique", args);
}
