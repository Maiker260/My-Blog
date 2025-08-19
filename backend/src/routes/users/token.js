import express from "express";
import jwt from "jsonwebtoken";
import { generateAccessToken } from "../../controllers/auth/access-token.js";
import { findRefreshToken } from "../../controllers/db/user/auth/find-refresh-token.js";

const tokenRouter = express.Router();

tokenRouter.post("/", async (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) return res.sendStatus(401);

    const user = req.body.username;

    const isRefreshTokenInDb = await findRefreshToken(user, refreshToken);

    if (!isRefreshTokenInDb) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(401);
        const accessToken = generateAccessToken({ name: user.name });
        res.json({ accessToken });
    });
});

export default tokenRouter;
