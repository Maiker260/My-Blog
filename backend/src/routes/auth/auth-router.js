import express from "express";
import loginRouter from "./login.js";
import signUpRouter from "./sign-up.js";
import refreshRouter from "./refreshToken.js";
import logoutRouter from "./logout.js";
import authorizeUserRouter from "./authorization.js";

const authRouter = express.Router();

authRouter.use("/login", loginRouter);
authRouter.use("/signup", signUpRouter);
authRouter.use("/refresh", refreshRouter);
authRouter.use("/logout", logoutRouter);
authRouter.use("/me", authorizeUserRouter);

export default authRouter;
