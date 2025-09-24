import express from "express";
import findUser from "../../controllers/db/user/find-user.js";
import { generateAccessToken } from "../../controllers/auth/access-token.js";
import findRefreshToken from "../../controllers/db/user/auth/find-refresh-token.js";

const refreshRouter = express.Router();

refreshRouter.post("/", async (req, res) => {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const tokenEntry = await findRefreshToken(refreshToken);
    if (!tokenEntry) return res.sendStatus(403);

    const foundUser = await findUser(tokenEntry.userId);
    if (!foundUser) return res.sendStatus(404);

    const newAccessToken = generateAccessToken(foundUser);

    res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 15 * 60 * 1000, // 15 min
    });

    res.json({ message: "Access token refreshed" });
});

export default refreshRouter;
