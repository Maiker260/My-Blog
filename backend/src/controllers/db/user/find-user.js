import dbQuery from "../db-query.js";

export default async function findUser(username, moreInfo = false) {
    return await dbQuery("user", "findUnique", {
        where: {
            username,
        },
        // It will include the params ONLY if "moreInfo" is TRUE
        ...(moreInfo && { include: moreInfo }),
    });
}
