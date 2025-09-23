import express from "express";
import findRefreshToken from "../../controllers/db/user/auth/find-refresh-token.js";
import deleteRefreshToken from "../../controllers/db/user/auth/delete-refresh-token.js";

const logoutRouter = express.Router();

// If the users logs out, then, the refreshToken will be deleted.
logoutRouter.post("/", async (req, res) => {
    try {
        const refreshToken = req.cookies?.refreshToken;

        if (refreshToken) {
            await deleteRefreshToken(refreshToken);
        }

        // Clear cookies
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");

        res.status(200).json({ message: "Logged out successfully" });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

export default logoutRouter;
