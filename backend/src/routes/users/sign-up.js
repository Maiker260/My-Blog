import express from "express";
import bcrypt from "bcryptjs";
import addUser from "../../controllers/db/user/add-user.js";

const signUpRouter = express.Router();

signUpRouter.post("/", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = {
            name: req.body.user,
            password: hashedPassword,
        };

        const result = await addUser(user);

        res.status(201).json(result);
    } catch (err) {
        console.log(err);
        res.status(403).send();
    }
});

export default signUpRouter;
