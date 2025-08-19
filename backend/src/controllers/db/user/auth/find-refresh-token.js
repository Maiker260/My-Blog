import bcrypt from "bcryptjs";
import findUser from "../find-user.js";

export async function findRefreshToken(username, plainRefreshToken) {
    const user = await findUser(username, {
        refreshTokens: {
            where: {
                revokedAt: null,
                expiresAt: { gt: new Date() },
            },
        },
    });

    if (!user || user.refreshTokens.length === 0) return null;

    for (const tokenRecord of user.refreshTokens) {
        const isTokenMatch = await bcrypt.compare(
            plainRefreshToken,
            tokenRecord.token
        );
        if (isTokenMatch) return tokenRecord;
    }

    return null;
}
