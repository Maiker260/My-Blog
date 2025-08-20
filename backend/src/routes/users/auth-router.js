import express from "express";
import loginRouter from "./login.js";
import signUpRouter from "./sign-up.js";
import tokenRouter from "./token.js";
import logoutRouter from "./logout.js";

const authRouter = express.Router();

authRouter.use("/login", loginRouter);
authRouter.use("/signup", signUpRouter);
authRouter.use("/token", tokenRouter);
authRouter.use("/logout", logoutRouter);

export default authRouter;
