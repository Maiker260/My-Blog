import dbQuery from "../../db-query.js";

export default async function deleteRefreshToken(token) {
    const args = {
        where: {
            token,
        },
    };

    const result = await dbQuery("refreshToken", "deleteMany", args);

    if (result) return { success: true };
}
