import express from "express";

const logoutRouter = express.Router();

logoutRouter.delete("/", (req, res) => {
    // Need to replace it to delete the refreshToken in the DB
    // const index = refreshTokens.indexOf(req.body.token);
    // if (index > -1) {
    //     refreshTokens.splice(index, 1);
    // }

    res.sendStatus(204);
});

export default logoutRouter;
