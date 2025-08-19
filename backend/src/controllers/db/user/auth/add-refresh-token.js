import { dbQuery } from "../../db-query.js";
import bcrypt from "bcryptjs";

export async function addRefreshToken(userId, plainRefreshToken) {
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const hashedToken = await bcrypt.hash(plainRefreshToken, 10);

    const args = {
        data: {
            token: hashedToken,
            userId,
            expiresAt: expires,
        },
    };

    const result = await dbQuery("refreshToken", "create", args);

    if (result) return { success: true };
}
