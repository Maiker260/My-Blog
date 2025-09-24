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

            // Set cookies
            res.cookie("accessToken", accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite:
                    process.env.NODE_ENV === "production" ? "none" : "lax",
                maxAge: 15 * 60 * 1000, // 15 minutes
            });

            res.cookie("refreshToken", plainRefreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            // Return user info for frontend
            res.json({
                message: "Login successful",
                user: {
                    id: user.id,
                    username: user.username,
                    isAdmin: user.isAdmin,
                },
            });
        } else {
            res.send("Incorrect user or password");
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
});

export default loginRouter;
