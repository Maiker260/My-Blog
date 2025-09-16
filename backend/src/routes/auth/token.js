import express from "express";
import findUser from "../../controllers/db/user/find-user.js";
import { generateAccessToken } from "../../controllers/auth/access-token.js";
import findRefreshToken from "../../controllers/db/user/auth/find-refresh-token.js";

const tokenRouter = express.Router();

tokenRouter.post("/", async (req, res) => {
    const { user, token: refreshToken } = req.body;
    if (!refreshToken) return res.sendStatus(401);

    const isRefreshTokenInDb = await findRefreshToken(user, refreshToken);
    if (!isRefreshTokenInDb) return res.sendStatus(403);

    const foundUser = await findUser(user);
    if (!foundUser) return res.sendStatus(403);

    const accessToken = generateAccessToken({
        id: foundUser.id,
        username: foundUser.username,
        isAdmin: foundUser.isAdmin,
    });

    res.json({ accessToken });
});

export default tokenRouter;
