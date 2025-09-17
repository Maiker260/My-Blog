import dbQuery from "../../db-query.js";

export default async function getUserTags(userId) {
    const args = {
        where: {
            userId,
        },
        select: {
            name: true,
        },
    };

    return await dbQuery("tag", "findMany", args);
}
