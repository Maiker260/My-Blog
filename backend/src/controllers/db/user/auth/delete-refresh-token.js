import dbQuery from "../../db-query.js";

export default async function deleteRefreshToken(token) {
    const args = {
        where: {
            token,
        },
    };

    const result = await dbQuery("refreshToken", "delete", args);

    if (result) return { success: true };
}
