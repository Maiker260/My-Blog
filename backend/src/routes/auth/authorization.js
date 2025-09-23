import express from "express";
import authenticateToken from "../../controllers/auth/authenticate-token.js";
import findUserById from "../../controllers/db/user/find-user-by-Id.js";

const authorizeUserRouter = express.Router();

authorizeUserRouter.get("/", authenticateToken, async (req, res) => {
    try {
        const user = await findUserById(req.user.id);
        if (!user) return res.sendStatus(404);

        res.json({
            id: user.id,
            username: user.username,
            isAdmin: user.isAdmin,
        });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

export default authorizeUserRouter;
