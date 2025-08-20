import jwt from "jsonwebtoken";
import crypto from "crypto";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

export function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN_SECRET, {
        expiresIn: "10m",
    });
}

export function generateRefreshToken() {
    return crypto.randomBytes(64).toString("hex");
}
