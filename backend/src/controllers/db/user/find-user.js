import { dbQuery } from "../db-query.js";

export default async function findUser(username, moreInfo = false) {
    return await dbQuery("user", "find", {
        where: {
            username,
        },
        ...(moreInfo && { include: moreInfo }),
    });
}
