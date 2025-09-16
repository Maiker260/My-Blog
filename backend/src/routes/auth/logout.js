import express from "express";
import findRefreshToken from "../../controllers/db/user/auth/find-refresh-token.js";
import deleteRefreshToken from "../../controllers/db/user/auth/delete-refresh-token.js";

const logoutRouter = express.Router();

// If the users logs out, then, the refreshToken will be deleted.
logoutRouter.delete("/", async (req, res) => {
    const user = req.body.username;

    const refreshToken = req.body.token;
    if (!refreshToken) return res.sendStatus(401);

    const refreshTokenInDb = await findRefreshToken(user, refreshToken);
    if (!refreshTokenInDb) return res.sendStatus(403);

    const result = await deleteRefreshToken(refreshTokenInDb.token);
    if (result) return res.sendStatus(204);
});

export default logoutRouter;
