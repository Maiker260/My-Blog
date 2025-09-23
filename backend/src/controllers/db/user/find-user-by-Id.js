import dbQuery from "../db-query.js";

export default async function findUserById(userId, moreInfo = false) {
    return await dbQuery("user", "findUnique", {
        where: {
            id: userId,
        },
        // It will include the params ONLY if "moreInfo" is TRUE
        ...(moreInfo && { include: moreInfo }),
    });
}
