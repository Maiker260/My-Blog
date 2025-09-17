import dbQuery from "../db-query.js";

export default async function getAllTags() {
    const args = {
        include: {
            name: true,
        },
    };

    return await dbQuery("tag", "findMany", args);
}
