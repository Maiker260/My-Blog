import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Main Route",
    });
});

app.listen(
    process.env.PORT,
    console.log(`Running Backend Server on Port ${process.env.PORT}`)
);
