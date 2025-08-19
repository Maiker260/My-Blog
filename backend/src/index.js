import express from "express";
import dotenv from "dotenv";
import postRouter from "./routes/blog/posts.js";
import signUpRouter from "./routes/users/sign-up.js";
import loginRouter from "./routes/users/login.js";
import tokenRouter from "./routes/users/token.js";
import logoutRouter from "./routes/users/logout.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({
        message: "Main Route",
    });
});

app.use("/posts", postRouter);
app.use("/signUp", signUpRouter);
app.use("/login", loginRouter);
app.use("/token", tokenRouter);
app.use("/logout", logoutRouter);

app.listen(
    process.env.PORT,
    console.log(`Running Backend Server on Port ${process.env.PORT}`)
);
