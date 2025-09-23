import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import apiRouter from "./routes/index.js";

const app = express();

const allowedOrigins = [
    process.env.FRONT_END_ADMIN_URL,
    process.env.FRONT_PUBLIC_URL,
];

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", apiRouter);

app.listen(
    process.env.PORT,
    console.log(`Running Backend Server on Port ${process.env.PORT}`)
);
