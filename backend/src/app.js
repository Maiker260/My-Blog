import "dotenv/config";
import express from "express";
import apiRouter from "./routes/users/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(
    process.env.PORT,
    console.log(`Running Backend Server on Port ${process.env.PORT}`)
);
