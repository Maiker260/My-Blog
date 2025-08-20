import express from "express";
import bcrypt from "bcryptjs";
import {
    generateAccessToken,
    generateRefreshToken,
} from "../../controllers/auth/access-token.js";
import findUser from "../../controllers/db/user/find-user.js";
import addRefreshToken from "../../controllers/db/user/auth/add-refresh-token.js";

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
    const user = await findUser(req.body.user);

    if (user == null) {
        return res.status(400).send("Incorrect user or password");
    }

    try {
        const isPasswordMatch = await bcrypt.compare(
            req.body.password,
            user.password
        );

        // If users credentials are valid, then, the tokens will be created.
        if (isPasswordMatch) {
            const accessToken = generateAccessToken(user);
            const plainRefreshToken = generateRefreshToken();

            addRefreshToken(user.id, plainRefreshToken);

            // NEED TO STORE THE TOKENS INTO THE CLIENT'S COOKIES
            res.json({ accessToken, plainRefreshToken });
        } else {
            res.send("Incorrect user or password");
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
});

export default loginRouter;
