import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

export function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN_SECRET, {
        expiresIn: "10m",
    });
}

export function generateRefreshToken(user) {
    return jwt.sign(user, REFRESH_TOKEN_SECRET);
}
