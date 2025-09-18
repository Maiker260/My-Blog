import dbQuery from "../db-query.js";

export default async function deletePost(id) {
    const args = {
        where: {
            id,
        },
    };

    return await dbQuery("post", "delete", args);
}
