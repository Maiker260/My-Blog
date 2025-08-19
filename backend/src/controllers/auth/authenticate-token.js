import jwt from "jsonwebtoken";

export function authenticateToken(req, res, next) {
    const authToken = req.headers["authorization"];
    const token = authToken && authToken.split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.username = user;
        next();
    });
}
